const electron = require('electron');
const BrowserWindow = electron.BrawserWindow;
const app = electron.app;

// let window;

function createWindow(){
	window = new BrowserWindow({width: 800, height: 600});
	window.laodUR(`file:///${__dirname}/empty-example/index.html`);
}

app.on('ready', createWindow);
