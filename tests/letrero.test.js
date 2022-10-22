const Letrero= require('../src/Letrero.js')

test("Letrero encendido", () => {
    const letrero=new Letrero();
    expect(letrero.estado).toBe("Encendido");
});


test("Letrero apagado", () => {
    const letrero=new Letrero();
    expect(letrero.estado).toBe("Apagado");
});

// hacer refactor
