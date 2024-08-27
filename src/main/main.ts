import { app, BrowserWindow, ipcMain, shell } from "electron";
import log from "electron-log";
import { autoUpdater } from "electron-updater";
import { resolveHtmlPath } from "./util";
const { spawn } = require('child_process');
const os = require('os');
import systeminformation from 'systeminformation';
// import { selfAccount } from "services/api.service";
import xmrConfigData from '../renderer/utils/xmr_config.js';


import axios from 'axios';
import AdmZip from 'adm-zip';
import fs from 'fs';
import path from 'path';
import { useState } from "react";
import { Miner } from "renderer/interfaces/pages/dashboard";

export default class AppUpdater {
  constructor() {
    log.transports.file.level = "info";
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

// const [miner, setMiner] = useState({
//   id: "",
//   email: "",
//   name: "",
//   shortId: "",
//   mcBalance: 0,
//   xmrBalance: 0,
//   hashrates: [],
//   avgHashrate: "0",
// } as Miner);





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

// const getMiner = async () => {
//   const { minerClone, selfFetched } = await selfAccount(miner);
//   console.log("minerClone------>", minerClone)
//   console.log("selfFetched------>", selfFetched)
//   setMiner(minerClone)
// }

// getMiner()

const handleDownloadConfig = (miner: any) => {
  const fileName = 'config.json';

  let config_data = xmrConfigData;

  config_data.pools[0].user = miner?.id;
  config_data.pools[0].pass = miner?.address;
  config_data.pools[0].url = 'pool.myriade.io:8222';

  const json = JSON.stringify(config_data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const href = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// handleDownloadConfig(miner)

// Determine the dynamic extraction path based on the operating system
const getExtractPath = () => {
  if (os.platform() === 'win32') {
    return path.join('C:', 'Program Files', 'xmrig');
  } else if (os.platform() === 'linux') {
    return path.join('/home', os.userInfo().username, 'xmrig');
  } else if (os.platform() === 'darwin') {
    return path.join('/Users', os.userInfo().username, 'xmrig');
  } else {
    throw new Error('Unsupported platform');
  }
};

let extractedFolderName: string | null = null;

const downloadAndExtractFile = async () => {
  let url = "";
  if (os.platform() === 'win32') {
    url = 'https://github.com/xmrig/xmrig/releases/download/v6.21.3/xmrig-6.21.3-msvc-win64.zip';

  } else if (os.platform() === 'linux') {
    url = "https://github.com/xmrig/xmrig/releases/download/v6.21.3/xmrig-6.21.3-linux-static-x64.tar.gz"
  } else if (os.platform() === "darwin") {
    const arch = os.arch()
    if (arch === 'arm64') {
      url = "https://github.com/xmrig/xmrig/releases/download/v6.21.3/xmrig-6.21.3-macos-arm64.tar.gz "
    } else if (arch === 'x64') {
      url = "https://github.com/xmrig/xmrig/releases/download/v6.21.3/xmrig-6.21.3-macos-x64.tar.gz"
    }

  }

  const downloadPath = path.join(app.getPath('temp'), 'xmrig.zip');

  // Use the dynamic path
  const extractPath = getExtractPath();

  try {
    // Create the xmrig directory if it doesn't exist
    if (!fs.existsSync(extractPath)) {
      fs.mkdirSync(extractPath, { recursive: true });
      console.log(`Directory ${extractPath} created.`);
    }

    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(downloadPath);
    response.data.pipe(writer);

    writer.on('finish', () => {
      console.log('Download completed.');

      // Extract the downloaded ZIP file into the xmrig directory
      const zip = new AdmZip(downloadPath);
      zip.extractAllTo(extractPath, true);
      console.log(`Files extracted to ${extractPath}`);

      // Get the list of files and directories inside the extraction path
      const extractedItems = fs.readdirSync(extractPath);
      console.log("extractedItems-------------------->", extractedItems)

      // Find the first directory inside the extraction path (assuming there's only one)
      extractedFolderName = extractedItems.find((item) => {
        return fs.statSync(path.join(extractPath, item)).isDirectory();
      }) || null;

      console.log(`Extracted folder-----> ${extractedFolderName}`);

      // Now that we have the extracted folder name, you can proceed with further logic
      // For example, you can call another function or update the UI here
    });

    writer.on('error', (err) => {
      console.error('Error writing the file:', err);
    });

  } catch (error) {
    console.error('Error downloading the file:', error);
  }
};





downloadAndExtractFile(); // Start the download and extraction process


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
    appPath = `C:\\Program Files\\xmrig\\${extractedFolderName}\\start.cmd`;
    console.log('windowsPath---------------->', appPath)
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
