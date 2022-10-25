function Intensidad() {
  this.valorIntensidad = 1;

  this.encender = function () {
    if (this.valorIntensidad < 10) {
      this.valorIntensidad += 1;
    }
  };
  this.apagar = function () {
    this.valorIntensidad -= 1;
  };
  this.cambiar = function () {
    if (this.valorIntensidad < 9) {
      this.valorIntensidad += 2;
    }
  };
}

module.exports = Intensidad;
