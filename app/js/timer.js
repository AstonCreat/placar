const moment = require('moment');

let segundos;
let timer;



module.exports = {
  iniciar(el) {
    console.log(el);
    // console.log(el.textContent);
    
    let tempo = moment.duration(el.textContent);
    segundos = tempo.asSeconds();
    clearInterval(timer);
    timer =setInterval(() => {
      segundos++;
      el.textContent = this.secondEndTime(segundos);
    }, 1000);
  },stop(el){
    clearInterval(timer);
    el.textContent = '00:00:00';

  }, secondEndTime(segundos) {
    return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
  }
}

