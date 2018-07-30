const moment = require('moment');

let segundos;


module.exports = {
  iniciar(el) {
    console.log(el);
    // console.log(el.textContent);
    let tempo = moment.duration(el.textContent);
    segundos = tempo.asSeconds();
    setInterval(() => {
      segundos++;
      el.textContent = this.secondEndTime(segundos);
    }, 1000);
  }, secondEndTime(segundos) {
    return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
  }
}