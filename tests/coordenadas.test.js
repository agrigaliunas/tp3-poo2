const Letrero = require("../src/Letrero.js");
const Posicion = require("../src/Posicion.js");

test("La seccion del tablero [0,0]-[2,2] debe estar apagado",() =>{
    const letrero = new Letrero();
    const posicion1 = new Posicion(0,0);
    const posicion2 = new Posicion(2,2);

    letrero.apagarRectangulo(posicion1,posicion2);
    expect(letrero.estadoRectangulo(posicion1,posicion2)).toBe("Apagado");
})