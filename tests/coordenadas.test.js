const Letrero = require("../src/Letrero.js");
const Posicion = require("../src/Posicion.js");

var letrero;
var posicion1;
var posicion2;


beforeEach(()=> {
    letrero = new Letrero();
    posicion1 = new Posicion(0,0);
    posicion2 = new Posicion(2,2);
});


test("La seccion del tablero [0,0]-[2,2] debe estar apagado",() =>{
    letrero.encenderRectangulo(posicion1,posicion2);
    letrero.apagarRectangulo(posicion1,posicion2);
    expect(letrero.estadoRectangulo(posicion1,posicion2)).toBe("Apagado");
})


test("La seccion del tablero [0,0]-[2,2] debe estar encendido",() =>{
    letrero.encenderRectangulo(posicion1,posicion2);
    expect(letrero.estadoRectangulo(posicion1,posicion2)).toBe("Encendido");
})


// 10000 luces
test("Cuantas hay apagadas letrero", () =>{
    letrero.encenderRectangulo(posicion1,posicion2);
    expect(letrero.cantidadApagadas()).toBe(9991);
})

test("Cuantas hay encendidas letrero", () =>{
    letrero.encenderRectangulo(posicion1,posicion2);
    expect(letrero.cantidadEncendidas()).toBe(9);
})