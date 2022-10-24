
const Letrero = require("../src/Letrero.js");
const Posicion = require("../src/Posicion.js");

var letrero;
var posicion1;


beforeEach(()=> {
    letrero = new Letrero();
    posicion1 = new Posicion(0,0);
    
});

test("Intensidad al prender", () =>{
    expect(letrero.intensidad(posicion1)).toBe(1);
})

/*
Encender (Turn on): Agregar una unidad de intensidad a las luces correspondientes.
- Apagar (Turn off): Disminuir la intensidad en una unidad de las luces correspondientes.
- Cambiar (Toggle): Agregar dos unidades de intensidad a las luces correspondientes.
- Cuantas hay encendidas: Devuelve el total de luces encendidas del letrero
*/