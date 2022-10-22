function Letrero(){
    // posicion {x,y}
    this.estado = function(x,y){
        return (this.luces[x][y]).estadoActual.estado;
    }
   
}

module.exports=Letrero;