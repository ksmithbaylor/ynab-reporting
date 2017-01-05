const { app, BrowserWindow } = require('electron');


////////////////////////////////////////////////////////////////////////////////
// Initialization

let mainWindow; // Prevent garbage-collection

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768
  });

  mainWindow.loadURL(process.env.HOT
    ? `http://localhost:3000/index.html`
    : `file://${__dirname}/build/index.html`
  );
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}


////////////////////////////////////////////////////////////////////////////////
// Event listeners

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
