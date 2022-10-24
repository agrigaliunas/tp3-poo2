const Luz = require("../src/Luz.js");

var luz;

beforeEach(() => {
  luz = new Luz();
});

test("Luz encendida", () => {
  luz.cambiarEstado();
  expect(luz.estadoActual.estado).toBe("Encendida");
});

test("Luz apagada", () => {
  expect(luz.estadoActual.estado).toBe("Apagada");
});

test("Encender luz", () => {
  luz.encender();
  expect(luz.estadoActual.estado).toBe("Encendida");
});

test("Apagar luz", () => {
  luz.apagar();
  expect(luz.estadoActual.estado).toBe("Apagada");
});