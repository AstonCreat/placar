const { ipcRenderer } = require('electron');
const path = require('path');
const timer = require(path.resolve(__dirname, 'js/timer'));


// variavel
let botaoPlay = document.querySelector('.fa-play-circle');
// let fundoBtn = document.querySelector('.starButton');
let tempo1 = document.querySelector('.time1');
let tempo2 = document.querySelector('#tempo2');
let selecao = document.querySelector('#categoria');


let placaB = document.querySelector('#lutadorBranco');
let placaV = document.querySelector('#lutadorVerde');
let totalvantagemFinal = document.querySelector('#totalVan');
let totalpunicaoFinal = document.querySelector('#totalPunicaoF');
let totalvantagemFinalV = document.querySelector('#totalVantagemFinalV');
let totalpunicaoFinalV = document.querySelector('#totalpunicaoFinalV');
document.querySelector('#playId').style.display = "none";
document.querySelector('#pauseId');
var separador;
var tempo;
var min;
var sec;
var pausa = 0;

// pontos branco
let totalDoisB = document.querySelector('#totalDoisB');
let totaltresB = document.querySelector('#totalTresB');
let totalquatroB = document.querySelector('#totalQuartroB');
let totalvantagemB = document.querySelector('#totalV');
let totalpunicaoB = document.querySelector('#totalPB');
// pontos verde
let totalDoisV = document.querySelector('#totalDoisV');
let totaltresV = document.querySelector('#totalTresV');
let totalquatroV = document.querySelector('#totalQuatroV');
let totalvantagemV = document.querySelector('#totalVanV');
let totalpunicaoV = document.querySelector('#totalPuniV');



// categoria
function selectCategoria() {
  var valueSelect = selecao.selectedIndex;
  // console.log(valueSelect);
  if (valueSelect !== '') {
    tempo = MTempo(valueSelect);
    separador = tempo.split(':');
    min = separador[0];
    sec = separador[1];
    document.querySelector('#playId').style.display = "block";
  }
}

function MTempo(event) {
  let mostra;
  switch (event) {
    case 1: mostra = '02:00'; break
    case 2: mostra = '03:00'; break
    case 3: mostra = '04:00'; break
    case 4: mostra = '05:00'; break
    case 5: mostra = '05:00'; break
    case 6: mostra = '06:00'; break
    case 7: mostra = '07:00'; break
    case 8: mostra = '08:00'; break
    case 9: mostra = '10:00'; break
    case 10: mostra = '05:00'; break
    case 11: mostra = '06:00'; break
    case 12: mostra = '05:00'; break
  }
  return tempo2.innerHTML = mostra;
}







// btn branco
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



// btn Verde
function btn2V() {
  doisPontos(totalDoisV);
  totalVer();
}
function btnM2V() {
  menosDois(totalDoisV);
  totalVer();
}
function btn3V() {
  tresPontos(totaltresV);
  totalVer();
}
function btnM3V() {
  menosTres(totaltresV);
  totalVer();
}
function btn4V() {
  quatroPontos(totalquatroV);
  totalVer();
}
function btnM4V() {
  menosQuatro(totalquatroV);
  totalVer();
}
// onclick Vantagem
function btn1V() {
  umPonto(totalvantagemV);
  totalVv();
}
function btnM1V() {
  menosUM(totalvantagemV);
  totalVv();
}
// onclick Punição
function btnP1V() {
  punicao(totalpunicaoV);
  totalPV();
}
function btnPM1V() {
  mPunicao(totalpunicaoV);
  totalPV();
}

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
  if (event.textContent === '' ) {
    event.innerHTML = 1;
  } else {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor + 1;
  }
}

function menosUM(event) {
  if (event.textContent !== '' ) {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor - 1;
  }
  if (event.textContent === '0') {
    event.innerHTML = '';
  }
}

//Punição pontos
function punicao(event) {
  if (event.textContent === '' ) {
    event.innerHTML = 1;
  } else {
    let valor = parseInt(event.innerHTML);
    if (event.textContent === '3') {
      console.log(event.textContent);
      event.innerHTML = 3;
    } else {
      event.innerHTML = valor + 1;
    }
  }
}
function mPunicao(event) {
  if (event.textContent !== '' ) {
    let valor = parseInt(event.innerHTML);
    event.innerHTML = valor - 1;
  }
  if (event.textContent === '0') {
    event.innerHTML = '';
  }
}

function getPontos(target) {
  if (target.textContent == '')
    return 0;

  return parseInt(target.textContent);
}
// vantagem branco
function totalV() {
  let total = getPontos(totalvantagemB);
  console.log(total)

  if (total)
    totalvantagemFinal.innerHTML = total;
  else
    totalvantagemFinal.innerHTML = '';

}
// vantagem verde
function totalVv() {
  let total = getPontos(totalvantagemV);
  console.log(total)

  if (total)
    totalvantagemFinalV.innerHTML = total;
  else
    totalvantagemFinalV.innerHTML = '';

}
// punicao branco
function totalP() {
  let total = getPontos(totalpunicaoB);
  console.log(total)

  if (total)
    totalpunicaoFinal.innerHTML = total;
  else
    totalpunicaoFinal.innerHTML = '';

}
// punicao verde
function totalPV() {
  let total = getPontos(totalpunicaoV);
  console.log(total)

  if (total)
    totalpunicaoFinalV.innerHTML = total;
  else
    totalpunicaoFinalV.innerHTML = '';

}
// total Branco
function totalB() {
  let total = getPontos(totalDoisB) + getPontos(totaltresB) + getPontos(totalquatroB);
  console.log(total)

  if (total)
    placaB.innerHTML = total;
  else
    placaB.innerHTML = '';

}
// total Verde
function totalVer() {
  let total = getPontos(totalDoisV) + getPontos(totaltresV) + getPontos(totalquatroV);
  console.log(total)

  if (total)
    placaV.innerHTML = total;
  else
    placaV.innerHTML = '';

}


// start
function play() {
  clearInterval(pausa);
  pausa = setInterval('cronometro()', 1000);
  selecao.disabled = true;
  document.querySelector('#playId').style.display = "none";
  document.querySelector('#pauseId').style.display = "block";
  timer.iniciar(tempo1);
}
function stop() {
  clearInterval(pausa);
  clearInput();
  timer.stop(tempo1);
  tempo2.innerHTML = "00:00";
  selecao.selectedIndex = 0;
  selecao.disabled = false;
  document.querySelector('#playId').style.display = "none";
  document.querySelector('#pauseId').style.display = "none";


}

// pausa verificar como chama a function pause()
function pause() {

  if (pausa) {
    clearTimeout(pausa);
    document.querySelector('#pauseId').style.display = "none";
  }
  document.querySelector('#playId').style.display = "block";
}

function cronometro() {

  if ((min > 0) || (sec > 0)) {
    if (sec == 0) {
      sec = 59;
      min = min - 1;
    } else {
      sec = sec - 1;
    }
    if (min.toString().length == 1) {
      min = "0" + min;
    }
    if (sec.toString().length == 1) {
      sec = "0" + sec;
    }

    tempo2.innerHTML = min + ':' + sec;
  } else {
    tempo2.innerHTML = "00:00";
  }
}

function clearInput() {
  totalDoisB.innerHTML = '';
  totaltresB.innerHTML = '';
  totalquatroB.innerHTML = '';
  totalvantagemB.innerHTML = '';
  totalpunicaoB.innerHTML = '';
  totalDoisV.innerHTML = '';
  totaltresV.innerHTML = '';
  totalquatroV.innerHTML = '';
  totalvantagemV.innerHTML = '';
  totalpunicaoV.innerHTML = '';
  placaB.innerHTML = '';
  placaV.innerHTML = '';
  totalvantagemFinal.innerHTML = '';
  totalpunicaoFinal.innerHTML = '';
  totalvantagemFinalV.innerHTML = '';
  totalpunicaoFinalV.innerHTML = '';
}

// play end pause
// function play() {
//   console.log(botaoPlay);
//   const item = document.querySelector('.fa-play-circle');

//   if (botaoPlay == item) {
//     // fundoBtn.classList.remove("starButton");
//     botaoPlay.classList.remove("fa-play-circle");

//     botaoPlay.classList.add("fa-pause-circle");
//     // fundoBtn.classList.add("pauseButton");
//     console.log("ativo btn pause");
//   } else {
//     // fundoBtn.classList.remove("pauseButton");
//     botaoPlay.classList.remove("fa-pause-circle");

//     // fundoBtn.classList.add("starButton");
//     botaoPlay.classList.add("fa-play-circle");
//     console.log("ativo btn play");
//   }

//   console.log("click play");
//   timer.iniciar(tempo1);
// };






