const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  generateMinerConfig: (userId) =>
    ipcRenderer.send("generate-miner-config", userId),
  startMiner: () => ipcRenderer.send("start-miner"),
  stopMiner: () => ipcRenderer.send("stop-miner"),
  registerHandlers: (modelHandler, loadHandler, tempHandler) => {
    ipcRenderer.on("cpu-model", (e, msg) => {
      modelHandler(msg);
    });

    ipcRenderer.on("cpu-load", (e, msg) => {
      loadHandler(msg);
    });

    ipcRenderer.on("cpu-temp", (e, msg) => {
      tempHandler(msg || "Can't compute");
    });
  },
  pollSysInfo: () => ipcRenderer.send("poll-sys-info"),
  getCPU: () => ipcRenderer.send("get-cpu-info"),
});
