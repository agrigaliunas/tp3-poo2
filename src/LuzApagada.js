const LuzEncendida = require("./LuzEncendida.js");

function LuzApagada() {
  this.estado = "Apagada";
  this.cambiarEstado = function () {
    return new LuzEncendida();
  };
}

module.exports = LuzApagada;
