const btnCerrar = document.getElementById("btnCerrar");
const input = document.getElementById("expresion");
const resultadoBox = document.getElementById("resultado");

btnCerrar.addEventListener("click", () => {
  window.api.cerrarApp();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calcular();
  }
});

async function calcular() {
  const expr = input.value;
  const resultado = await window.api.calcular(expr);
  resultadoBox.innerText = resultado;
}
