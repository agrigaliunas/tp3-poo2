function Luz() {
  this.estado = "Apagada";
  
  this.cambiarEstado = function () {
    if (this.estado == "Apagada"){
        this.estado="Encendida"
    }
    else{
        this.estado = "Apagada";
    }
  };
}

module.exports = Luz;
