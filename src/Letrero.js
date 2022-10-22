const Luz = require("./Luz.js");

function Letrero() {
  // posicion {x,y}
  // max 99x99
  //this.luces = [[99 luces],[99 luces], 99 veces]

  this.luces = new Array(100);
  const aux = new Array(100);

  for (let i = 0; i < 100; i++) {
    aux[i] = new Luz();
  }

  for (let i = 0; i < 100; i++) {
    this.luces[i] = aux;
  }

  this.estado = function (x, y) {
    return this.luces[x][y].estadoActual.estado;
  };

  

}

module.exports = Letrero;
