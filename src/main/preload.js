
const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    startXmrig: () => ipcRenderer.send('start-xmrig'),
    stopXmrig: () => ipcRenderer.send('stop-xmrig'),
    onXmrigOutput: (callback) => ipcRenderer.on('xmrig-output', callback),
    onXmrigExit: (callback) => ipcRenderer.on('xmrig-exit', callback),
    getSystemInfo: () => ipcRenderer.invoke('get-system-info')
});

