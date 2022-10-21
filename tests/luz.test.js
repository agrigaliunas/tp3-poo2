const Luz = require("../src/Luz.js");

test("Luz encendida", () => {
  var luz = new Luz();
  expect(luz.estado).toBe("Encendida");
});
