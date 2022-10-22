const LuzApagada = require("./LuzApagada.js");

function LuzEncendida() {
  this.estado = "Encendida";
  this.cambiarEstado = function () {
    return new LuzApagada();
  };
}

module.exports = LuzEncendida;
