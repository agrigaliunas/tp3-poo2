
function LuzApagada() {
    this.cambiarEstado=function(){
        return new LuzEncendida();
    }
}

module.exports=LuzApagada;