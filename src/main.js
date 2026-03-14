const { app, BrowserWindow, ipcMain } = require("electron");
const { spawn } = require("child_process");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 170,
    autoHideMenuBar: true,
    frame: false,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

ipcMain.on("cerrar-app", () => {
  if (win) {
    win.close();
  }
  app.quit();
});

const { evaluate } = require("mathjs");

ipcMain.handle("calcular", async (event, expresion) => {
  try {
    const resultado = evaluate(expresion);  
    return resultado;
  } catch (e) {
    return `Error: ${e.message}`;
  }
});
