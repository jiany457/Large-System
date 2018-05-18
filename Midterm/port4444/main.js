const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

function createWindow() {
  let window = new BrowserWindow({width: 1280, height: 720 });
  window.loadURL(`file:///${__dirname}/index.html`);
}

app.on('ready', createWindow);