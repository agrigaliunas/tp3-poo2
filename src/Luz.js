const LuzApagada = require("./LuzApagada");
const LuzEncendida = require("./LuzEncendida");

function Luz() {
  this.estadoActual = new LuzApagada();

  this.cambiarEstado = function () {
    this.estadoActual = this.estadoActual.cambiarEstado();
  };

  this.encender = function () {
    this.estadoActual = new LuzEncendida();
  };

  this.apagar = function () {
    this.estadoActual = new LuzApagada();
  };
}

module.exports = Luz;
