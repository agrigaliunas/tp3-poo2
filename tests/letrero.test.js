const Letrero = require("../src/Letrero.js");
const Posicion=require('../src/Posicion.js')

beforeEach(()=> {
    const letrero = new Letrero();
    const posicion = new Posicion(1,2);
});


test("Letrero [1,2] encendido", () => {
  letrero.cambiarEstado(posicion);
  expect(letrero.estado(posicion)).toBe("Encendida");
});

test("Letrero [1,2] apagado", () => {
  expect(letrero.estado(posicion)).toBe("Apagada");
});

