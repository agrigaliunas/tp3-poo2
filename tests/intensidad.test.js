const Letrero = require("../src/Letrero.js");
const Posicion = require("../src/Posicion.js");

var letrero;
var posicion1;

beforeEach(() => {
  letrero = new Letrero();
  posicion1 = new Posicion(0, 0);
});

test("Intensidad al encender dos veces", () => {
  letrero.encenderRectangulo(posicion1, posicion1);
  letrero.encenderRectangulo(posicion1, posicion1);
  expect(letrero.intensidad(posicion1)).toBe(2);
});

test("Intensidad maxima", () => {
  for (let i = 0; i < 12; i++) {
    letrero.encenderRectangulo(posicion1, posicion1);
  }
  expect(letrero.intensidad(posicion1)).toBe(10);
});

test("Intensidad al apagar", () => {
  letrero.encenderRectangulo(posicion1, posicion1);
  letrero.encenderRectangulo(posicion1, posicion1);
  letrero.apagarRectangulo(posicion1, posicion1);

  expect(letrero.intensidad(posicion1)).toBe(1);
});

test("Intensidad minima", () => {
  for (let i = 0; i < 12; i++) {
    letrero.apagarRectangulo(posicion1, posicion1);
  }

  expect(letrero.intensidad(posicion1)).toBe(0);
});


test("Intensidad al cambiar estando apagada", () => {
    letrero.alternar(posicion1);
    expect(letrero.intensidad(posicion1)).toBe(2);
});
  



/*
Encender (Turn on): Agregar una unidad de intensidad a las luces correspondientes.
- Apagar (Turn off): Disminuir la intensidad en una unidad de las luces correspondientes.
- Cambiar (Toggle): Agregar dos unidades de intensidad a las luces correspondientes.
- Cuantas hay encendidas: Devuelve el total de luces encendidas del letrero
*/
