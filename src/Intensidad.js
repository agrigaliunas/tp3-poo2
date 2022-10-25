function Intensidad() {
  this.valorIntensidad = 1;
  
  this.encender = function () {
    if (this.condicion()) {
      this.valorIntensidad += 1;
    }
  };
  this.apagar = function () {
    this.valorIntensidad -= 1;
  };
  this.cambiar = function () {
    this.valorIintensidad += 2;
  };

  this.condicion = function () {
    return this.valorIntensidad < 10;
  };
}

module.exports = Intensidad;
