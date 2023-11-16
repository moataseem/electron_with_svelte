const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", ()=> {
    const mainWindow = new BrowserWindow();
    const indexPath = path.join(__dirname, "public/index.html");
    mainWindow.loadFile(indexPath)
    // .then(i=> mainWindow.webContents.openDevTools())
    .catch(console.error);
});