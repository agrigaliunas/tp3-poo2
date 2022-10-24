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

  this.apagarRectangulo = function (posicion1, posicion2) {
    for (var i = posicion1.x; i <= posicion2.x; i++) {
        for (var j = posicion1.y; j <= posicion2.y; j++) {
          this.luces[i][j].apagar();
        }
      }
  };

  this.encenderRectangulo = function (posicion1, posicion2) {
    for (var i = posicion1.x; i <= posicion2.x; i++) {
      for (var j = posicion1.y; j <= posicion2.y; j++) {
        this.luces[i][j].encender();
      }
    }
  };

  this.alternar = function(posicion1, posicion2) {
    for (var i = posicion1.x; i <= posicion2.x; i++) {
      for (var j = posicion1.y; j <= posicion2.y; j++) {
        this.luces[i][j].cambiarEstado();
      }
    }
  }

  this.estadoRectangulo = function (posicion1, posicion2) {
    var cond = "Encendido";
    for (var i = posicion1.x; i <= posicion2.x; i++) {
      for (var j = posicion1.y; j <= posicion2.y; j++) {
        if (this.luces[i][j].estadoActual.estado == "Apagada") {
          cond = "Apagado";
        }
      }
    }
    return cond;
  };

  this.cantidadApagadas = function() {
    var cant = 0;
    for (var i = 0; i <=99; i++) {
      for (var j = 0; j <= 99; j++) {
        if (this.luces[i][j].estadoActual.estado=="Apagada"){
          cant++;
        };
      }
    }
    return cant;
  }



}

module.exports = Letrero;
