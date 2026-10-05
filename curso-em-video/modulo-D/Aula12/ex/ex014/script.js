function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  //var hora = data.getHours();
  var hora = 20;
  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "fotomanha.png";
    document.body.style.background = "#e2cd9f";
    msg.innerHTML += `<p>Bom Dia</p>`;
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = "fototarde.png";
    document.body.style.background = "#b9846f";
    msg.innerHTML += `<p>Boa Tarde</p>`;
  } else {
    img.src = "fotonoite.png";
    document.body.style.background = "#515154";
    msg.innerHTML += `<p>Boa Noite</p>`;
  }
}
