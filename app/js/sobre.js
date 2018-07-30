const {ipcRenderer} = require('electron');

let linkFechar = document.querySelector("#link-fechar");

linkFechar.addEventListener('click', function(){
  ipcRenderer.send('fechar-janela-sobre');
})