const { Animal } = require("./Animal");
const { Cachorro } = require("./Cachorro");

let a1 = new Animal("Joel", 14, "marrom")
let c1 = new Cachorro("vira lata", "Joel", 14, "Preto")

// console.log(a1.emitirSom);
// console.log(c1.emitirSom);
a1.emitirSom()
c1.emitirSom()