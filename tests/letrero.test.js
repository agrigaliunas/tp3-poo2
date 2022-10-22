const Letrero = require("../src/Letrero.js");

test("Letrero encendido", () => {
  const letrero = new Letrero();
  expect(letrero.estado(1,2)).toBe("Encendido");
});

test("Letrero apagado", () => {
  const letrero = new Letrero();
  letrero.cambiarEstado(1,2);
  expect(letrero.estado(1,2)).toBe("Apagado");
});

// hacer refactor
