const { contextBridge, ipcRenderer } = require("electron");

console.log("preload hit");

contextBridge.exposeInMainWorld("electronAPI", {
  startMiner: () => ipcRenderer.send("start-miner"),
  stopMiner: () => ipcRenderer.send("stop-miner"),
});
