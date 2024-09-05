
const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    startXmrig: () => ipcRenderer.send('start-xmrig'),
    stopXmrig: () => ipcRenderer.send('stop-xmrig'),
    getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
    changeConfig: (data) => ipcRenderer.send('change-config', data),
});

