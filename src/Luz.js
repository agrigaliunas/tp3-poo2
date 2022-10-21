
function Luz(){
    this.estado="Encendida";
    this.cambiarEstado= function() {
        this.estado="Apagada"
    }
}

module.exports=Luz;