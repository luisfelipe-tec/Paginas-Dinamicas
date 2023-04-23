function tocaSomPom(idSom) {
  document.querySelector(idSom).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");



for (let i = 0; i < listaDeTeclas.length; i++) {
    const identificador = listaDeTeclas[i].classList[1]
  listaDeTeclas[i].onclick = function () {
    tocaSomPom(`#som_${identificador}`);
  };

  listaDeTeclas[i].onkeydown = function (evento) {
    if(evento.code === 'Space' || evento.code === 'Enter'){
        listaDeTeclas[i].classList.add('ativa')
    }
    
  };

  listaDeTeclas[i].onkeyup = function () {
    listaDeTeclas[i].classList.remove('ativa')
  };
}

