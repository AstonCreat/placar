const { ipcRenderer } = require('electron');
const path = require('path');
const timer = require(path.resolve(__dirname, 'js/timer'));


// variavel
let botaoPlay = document.querySelector('.fa-play-circle');
// let fundoBtn = document.querySelector('.starButton');
let tempo1 = document.querySelector('.time1');

let placaB = document.querySelector('#lutadorBranco');
let totalvantagemFinal = document.querySelector('#totalVan');
let totalpunicaoFinal = document.querySelector('#totalPunicaoF');

// pontos branco
let totalDoisB = document.querySelector('#totalDoisB');
let totaltresB = document.querySelector('#totalTresB');
let totalquatroB = document.querySelector('#totalQuartroB');
let totalvantagemB = document.querySelector('#totalV');
let totalpunicaoB = document.querySelector('#totalPB');


// categoria
function selectCategoria() {
  let selectCad = document.getElementById("categoria");
  let indice = selectCad.selectedIndex;
  let valueSelect = selectCad.options[indice].text;
  console.log(valueSelect);
}

// onclick 2 pontos
function btn2B() {
  doisPontos(totalDoisB);
  totalB();
}
function btnM2B() {
  menosDois(totalDoisB);
  totalB();
}
// onclick 3 pontos
function btn3B() {
  tresPontos(totaltresB);
  totalB();
}
function btnM3B() {
  menosTres(totaltresB);
  totalB();
}
// onclick 4 pontos
function btn4B() {
  quatroPontos(totalquatroB);
  totalB();
}
function btnM4B() {
  menosQuatro(totalquatroB);
  totalB();
}
// onclick Vantagem
function btn1B() {
  umPonto(totalvantagemB);
  totalV();
}
function btnM1B() {
   menosUM(totalvantagemB);
  totalV();
}
// onclick Punição
function btnP1B() {
  punicao(totalpunicaoB);
  totalP();
}
function btnPM1B() {
  mPunicao(totalpunicaoB);
  totalP();
}
// fuções de pontos


//Dois pontos
function doisPontos(event) {
  if (event.textContent === '') {
    event.innerHTML = 2;
  } else {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor + 2;
  }
}
function menosDois(event) {
  if (event.textContent !== '') {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor - 2;
  }
  if (event.textContent === '0') {
    event.innerHTML = '';
  }
}

//três pontos
function tresPontos(event) {
  if (event.textContent === '') {
    event.innerHTML = 3;
  } else {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor + 3;
  }
}
function menosTres(event) {
  if (event.textContent !== '') {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor - 3;
  }
  if (event.textContent === '0') {
    event.innerHTML = '';
  }
}

//quatro pontos
function quatroPontos(event) {
  if (event.textContent === '') {
    event.innerHTML = 4;
  } else {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor + 4;
  }
  
}

function menosQuatro(event) {
  if (event.textContent !== '') {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor - 4;
  }
  if (event.textContent === '0') {
    event.innerHTML = '';
  }
}
//vantagem pontos
function umPonto(event) {
  if (event.textContent === '') {
    event.innerHTML = 1;
  } else {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor + 1;
  }
}

function menosUM(event) {
  if (event.textContent !== '') {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor - 1;
  }
  if (event.textContent === '0') {
    event.innerHTML = '';
  }
}

//Punição pontos
function punicao(event) {
  if (event.textContent === '') {
    event.innerHTML = 1;
  } else {
    let valor = parseInt(event.innerHTML);
    if (event.textContent === '4') {
      console.log(event.textContent);
      event.innerHTML = 4;
    } else {
      event.innerHTML = valor + 1;
    }
  }
}
function mPunicao(event) {
  if (event.textContent !== '') {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor - 1;
  }
  if (event.textContent === '0') {
    event.innerHTML = '';
  }
}

function getPontos(target){
  if(target.textContent == '')
    return 0;

  return parseInt(target.textContent);
}

function totalV(){
  let total = getPontos(totalvantagemB);
  console.log(total)

  if(total)
  totalvantagemFinal.innerHTML = total;
  else
  totalvantagemFinal.innerHTML = '';

}
function totalP(){
  let total = getPontos(totalpunicaoB);
  console.log(total)

  if(total)
  totalpunicaoFinal.innerHTML = total;
  else
  totalpunicaoFinal.innerHTML = '';

}
function totalB(){
  let total = getPontos(totalDoisB) + getPontos(totaltresB) + getPontos(totalquatroB);
  console.log(total)

  if(total)
  placaB.innerHTML = total;
  else
  placaB.innerHTML = '';

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






