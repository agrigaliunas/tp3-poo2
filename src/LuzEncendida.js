const Intensidad = require("../src/Intensidad.js");

function LuzEncendida() {
  this.estado = "Encendida";
  this.intensidad = new Intensidad();

  this.estadoIntensidad = function () {
    return this.intensidad.valorIntensidad;
  };
}

module.exports = LuzEncendida;
