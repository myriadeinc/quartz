import { app, BrowserWindow, ipcMain, shell } from "electron";
import { autoUpdater } from "electron-updater";
import MenuBuilder from "./menu";
import log from "electron-log";
import {
  createMinerDir,
  createWindowsExclusion,
  downloadMiner,
  generateMinerConfig,
  getCpu,
  getCpuTemp,
  getCpuUsage,
  pauseMiner,
  resolveHtmlPath,
  startMiner,
} from "./util";
import path from "path";

export default class AppUpdater {
  constructor() {
    log.transports.file.level = "info";
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

createMinerDir();
createWindowsExclusion();
downloadMiner();

ipcMain.on("generate-miner-config", (_e, data) => {
  generateMinerConfig(data);
});

ipcMain.on("start-miner", () => {
  startMiner();
});

ipcMain.on("stop-miner", () => {
  pauseMiner();
});

if (process.env.NODE_ENV === "production") {
  const sourceMapSupport = require("source-map-support");
  sourceMapSupport.install();
}

const isDevelopment =
  process.env.NODE_ENV === "development" || process.env.DEBUG_PROD === "true";

if (isDevelopment) {
  require("electron-debug")();
}

require("electron-debug")();

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

  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadURL(resolveHtmlPath("index.html"));

  mainWindow.on("ready-to-show", () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  ipcMain.on("poll-sys-info", () => {
    getCpuUsage().then((val) => {
      mainWindow?.webContents.postMessage("cpu-load", val.currentLoad);
    });
    getCpuTemp().then((val) => {
      mainWindow?.webContents.postMessage("cpu-temp", val.main);
    });
  });

  ipcMain.on("get-cpu-info", () => {
    getCpu().then((val) => {
      mainWindow?.webContents.postMessage("cpu-model", val.brand);
    });
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
