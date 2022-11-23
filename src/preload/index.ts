import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('ipcRenderer', {
  on: ipcRenderer.on.bind(ipcRenderer),
  invoke: ipcRenderer.invoke.bind(ipcRenderer),
  removeAllListeners: ipcRenderer.removeAllListeners.bind(ipcRenderer)
})
