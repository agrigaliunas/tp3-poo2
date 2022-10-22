const Letrero = require("../src/Letrero.js");
const Posicion=require('../src/Posicion.js')

test("Letrero [x,y] encendido", () => {
  const letrero = new Letrero();
  const posicion = new Posicion();
  letrero.cambiarEstado(posicion);
  expect(letrero.estado(posicion)).toBe("Encendida");
});

test("Letrero [x,y] apagado", () => {
  const letrero = new Letrero();
  const posicion = new Posicion();
  expect(letrero.estado(posicion)).toBe("Apagada");
});

