const Letrero = require("../src/Letrero.js");

test("Letrero [1,2] encendido", () => {
  const letrero = new Letrero();
  expect(letrero.estado(1,2)).toBe("Encendido");
});

test("Letrero [1,2] apagado", () => {
  const letrero = new Letrero();
  expect(letrero.estado(1,2)).toBe("Apagada");
});

// hacer refactor
