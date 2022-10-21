const LuzApagada = require('./LuzApagada');
const LuzEncendida = require('./LuzEncendida');

function Luz() {
  this.estadoActual = new LuzApagada();

  this.cambiarEstado = function () {
    this.estadoActual = this.estadoActual.cambiarEstado();
  };
}

module.exports = Luz;
