const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  startMiner: () => ipcRenderer.send("start-miner"),
  stopMiner: () => ipcRenderer.send("stop-miner"),
});
