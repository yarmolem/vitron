import { join } from 'path'
import { BrowserWindow, app } from 'electron'

const isDev = !app.isPackaged

export function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: join(__dirname, '../preload/index.js')
    }
  })

  const URL = isDev
    ? process.env.DS_RENDERER_URL
    : `file://${join(app.getAppPath(), 'dist/render/index.html')}`

  win.loadURL(URL)

  if (isDev) win.webContents.openDevTools()

  win.on('closed', () => win.destroy())

  return win
}
