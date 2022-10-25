const LuzApagada = require("./LuzApagada");
const LuzEncendida = require("./LuzEncendida");

function Luz() {
  this.estadoActual = new LuzApagada();

  this.cambiarEstado = function () {
    if (this.estadoActual.estado == "Apagada") {
      this.estadoActual = new LuzEncendida();
    }
    else{
      this.estadoActual = new LuzApagada();
    }
  };

  this.encender = function () {
    if (this.estadoActual.estado == 'Apagada'){
      this.estadoActual = new LuzEncendida();
    } else {
      this.estadoActual.intensidad.encender();
    }
  };

  this.apagar = function () {
    this.estadoActual = new LuzApagada();
  };
}

module.exports = Luz;
