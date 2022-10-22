const Letrero = require("../src/Letrero.js");

test("La seccion del tablero [0,0]-[2,2] debe estar apagado",() =>{
    const letrero = new Letrero();
    expect(letrero.rectangulo(posicion1,posicion2)).toBe("Apagado");
})