const Letrero = require("../src/Letrero.js");
const Posicion=require('../src/Posicion.js')

test("Letrero [1,2] encendido", () => {
  const letrero = new Letrero();
  const posicion = new Posicion(1,2);
  letrero.cambiarEstado(posicion);
  expect(letrero.estado(posicion)).toBe("Encendida");
});

test("Letrero [1,2] apagado", () => {
  const letrero = new Letrero();
  const posicion = new Posicion(1,2);
  expect(letrero.estado(posicion)).toBe("Apagada");
});

