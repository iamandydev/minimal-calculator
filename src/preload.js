const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  calcular: (expresion) => ipcRenderer.invoke("calcular", expresion),
  cerrarApp: () => ipcRenderer.send("cerrar-app")
});
