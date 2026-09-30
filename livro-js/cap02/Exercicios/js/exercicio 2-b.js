// cria referência aos elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("#resp");
// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  // obtém conteúdo dos campos de entrada
  const valor = Number(frm.inValor.value);
  const tempo = Number(frm.inTempo.value);
  // calcula valor
  const pagar = Math.ceil(tempo / 15) * valor;
  // exibe as respostas
  resp.innerText = `Valor a Pagar R$: ${pagar.toFixed(2)}`;
  e.preventDefault();
});
// exibe as respostas
