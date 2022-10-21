const Luz = require("./src/Luz.js")

test('Luz encendida', ()=>{
    expect(Luz.estado).toBe("Encendida")
})
