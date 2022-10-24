function Intensidad() {
  this.valorIntensidad = 0;
  this.encender = function () {
    this.valorIntensidad += 1;
  };
  this.apagar = function () {
    this.valorIntensidad -= 1;
  };
  this.cambiar = function () {
    this.valorIintensidad += 2;
  };
}

module.exports = Intensidad;
