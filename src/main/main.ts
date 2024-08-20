import { app, BrowserWindow, ipcMain, shell } from "electron";
import log from "electron-log";
import { autoUpdater } from "electron-updater";
import { resolveHtmlPath } from "./util";
const { spawn } = require('child_process');
const os = require('os');
import systeminformation from 'systeminformation';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = "info";
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === "production") {
  const sourceMapSupport = require("source-map-support");
  sourceMapSupport.install();
}

const isDevelopment =
  process.env.NODE_ENV === "development" || process.env.DEBUG_PROD === "true";

if (isDevelopment) {
  require("electron-debug")();
}

const installExtensions = async () => {
  const installer = require("electron-devtools-installer");
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ["REACT_DEVELOPER_TOOLS"];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  app.commandLine.appendSwitch("enable-features=OverlayScrollbar");
  const path = require("path");
  function getPlatformIcon() {
    if (process.platform === "win32") {
      return path.join(__dirname, "icons", "icon.ico"); // Windows
    } else if (process.platform === "darwin") {
      return path.join(__dirname, "icons", "icon.icns"); // macOS
    } else {
      return path.join(__dirname, "icons", "icon-512x512.png"); // Linux and others
    }
  }

  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1020,
    frame: true,
    paintWhenInitiallyHidden: true,
    backgroundColor: "#080a0f",
    // show: false,
    title: "Myriade",
    autoHideMenuBar: true,
    resizable: true,
    icon: getPlatformIcon(),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
    },
  });


  mainWindow.loadURL(resolveHtmlPath("index.html"));
  app.on("ready", () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });
  process.on("uncaughtException", function (err) {
    console.log(err, "uncaught exceptions");
  });

  app.on("window-all-closed", () => {
    mainWindow = null;
  });

  //const menuBuilder = new MenuBuilder(mainWindow);
  //menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  // new AppUpdater();


  ipcMain.handle('get-system-info', async () => {
    try {
      // This brings the temperature however the temperature is not shown correctly
      let { main: temperature } = await systeminformation.cpuTemperature()
      // over-riding the temperature variable with a hard coaded string
      temperature = "N/A"
      const currentLoad = await systeminformation.currentLoad();
      const cpu = await systeminformation.cpu();

      return {
        temperature,
        load: currentLoad.currentload,
        cpu: cpu.manufacturer + ' ' + cpu.brand
      };
    } catch (error) {
      console.error('Error getting system information:', error);
      return { error: error.message };
    }
  });

};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

let appProcess: any;

ipcMain.on('start-xmrig', (event) => {
  let appPath;
  // For Windows
  if (os.platform() === 'win32') {
    // Path for windows
    appPath = 'C:\\Program Files\\xmrig\\start.cmd';
    // For Linux
  } else if (os.platform() === 'linux') {
    // Path for linux
    appPath = '/home/user/Documents/xmrig/xmrig';
    // For Mac
  } else if (os.platform() === 'darwin') {
    // Path for Mac
    appPath = '/Users/admin/xmrig/xmrig';
  }

  if (!appProcess) {
    appProcess = spawn(appPath, ['--config=config.json']);
    appProcess.stdout.on('data', (data: any) => {
      console.log(`stdout: ${data}`);
      event.reply('xmrig-output', `${data}`);
    });
    appProcess.stderr.on('data', (data: any) => {
      event.reply('xmrig-output', `stderr: ${data}`);
    });
    appProcess.on('close', (code: any) => {
      appProcess = null;
      event.reply('xmrig-exit', `Process exited with code ${code}`);
    });
  }
});

ipcMain.on('stop-xmrig', (event) => {
  if (appProcess) {
    appProcess.stdout.removeAllListeners('data');
    appProcess.stderr.removeAllListeners('data');
    console.log("xmRig app paused...")
    // Kill the process after the timeout
    appProcess.kill('SIGTERM');
    appProcess = null;
    event.reply('xmrig-output', appProcess);
  } else {
    console.log("xmRig is not running.");
  }
});
