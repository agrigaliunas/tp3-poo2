const Luz = require("./Luz.js");

const CrearLetrero = ( function () {
    
    function crearLuces() {
        const aux = new Array(100);
        const luces = new Array(100);
        
        for (let i = 0; i < 100; i++) {
            aux[i] = new Luz();
        }
        
        for (let i = 0; i < 100; i++) {
            luces[i] = aux;
        }

        return luces;
    }

    return {
        crearLuces: crearLuces
    };
})();

module.exports = CrearLetrero;
