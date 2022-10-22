const CrearLetrero = require("./CrearLetrero.js");

function Letrero() {
  // posicion {x,y}
  // max 99x99
  //this.luces = [[99 luces],[99 luces], 99 veces]

  this.luces = CrearLetrero.crearLuces();

  this.estado = function (posicion) {
    return this.luces[posicion.x][posicion.y].estadoActual.estado;
  };

  this.cambiarEstado = function (posicion) {
    this.luces[posicion.x][posicion.y].cambiarEstado();
  };

  this.apagarRectangulo = function (posicion1, posicion2) {};

  this.encenderRectangulo = function (posicion1, posicion2) {};


  this.estadoRectangulo = function (posicion1, posicion2) {
    return "Apagado";
  };
}

module.exports = Letrero;
