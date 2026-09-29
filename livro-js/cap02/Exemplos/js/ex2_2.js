// criar referencia ao form e aos elementos de resposta(pelo id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botao submit for clicado

frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value; //obtem conteudo dos campos
  const duracao = Number(frm.inDuracao.value);

  const horas = Math.floor(duracao / 60); //aredonda para  baixo o resultado
  const minutos = duracao % 60; // obtem o resultado da divisao

  resp1.innerText = titulo; //exibe as repostas
  resp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`;

  e.preventDefault();
});
