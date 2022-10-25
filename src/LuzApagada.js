function LuzApagada() {
  this.estado = "Apagada";
  this.estadoIntensidad = function () {
    return 0;
  };
}

module.exports = LuzApagada;
