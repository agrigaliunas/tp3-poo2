const Luz = require("../src/Luz.js");

test("Luz encendida", () => {
  var luz = new Luz();
  luz.cambiarEstado();
  expect(luz.estado).toBe("Encendida");
});

test("Luz apagada", () => {
    var luz = new Luz();
    expect(luz.estado).toBe("Apagada");
});



