const Intensidad = require('../src/Intensidad.js');

function LuzEncendida() {
  this.estado = "Encendida";
  this.intensidad = new Intensidad();
}

module.exports = LuzEncendida;
