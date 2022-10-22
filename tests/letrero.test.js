const Letrero= require('../src/Letrero.js')

test("Letrero encendido", () => {
    const letrero=new Letrero();
    expect(letretro.estado).toBe("Encendido");
});

// hacer refactor
