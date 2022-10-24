const Luz = require("./Luz.js");

const CrearLetrero = ( function () {
    
    function crearLuces() {
        const luces = new Array(100);            

        for (var i = 0; i < luces.length; i++) {
            luces[i] = new Array(100);
        }
          
        var h = 0;
          
        for (var i = 0; i <= 99; i++) {
            for (var j = 0; j <= 99; j++) {
                luces[i][j] = new Luz();
            }
        }
                
        return luces;
    }

    return {
        crearLuces: crearLuces
    };
})();

module.exports = CrearLetrero;
