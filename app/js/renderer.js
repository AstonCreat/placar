const { ipcRenderer } = require('electron');
const path = require('path');
const timer = require(path.resolve(__dirname, 'js/timer'));


// variavel
let botaoPlay = document.querySelector('.fa-play-circle');
// let fundoBtn = document.querySelector('.starButton');
let tempo1 = document.querySelector('.time1');


// onclick

// categoria
function selectCategoria() {
  let selectCad = document.getElementById("categoria");
  let indice = selectCad.selectedIndex;
  let valueSelect = selectCad.options[indice].text;
  console.log(valueSelect);
}



console.log(botaoPlay);
// play end pause
function play() {
  console.log(botaoPlay);
  const item = document.querySelector('.fa-play-circle');
  
  if (botaoPlay == item) {
    // fundoBtn.classList.remove("starButton");
    botaoPlay.classList.remove("fa-play-circle");

    botaoPlay.classList.add("fa-pause-circle");
    // fundoBtn.classList.add("pauseButton");
    console.log("ativo btn pause");
  } else {
    // fundoBtn.classList.remove("pauseButton");
    botaoPlay.classList.remove("fa-pause-circle");

    // fundoBtn.classList.add("starButton");
    botaoPlay.classList.add("fa-play-circle");
    console.log("ativo btn play");
  }

  console.log("click play"); 
  timer.iniciar(tempo1);
};






