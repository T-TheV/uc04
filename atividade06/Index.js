const { Animal } = require("./Animal");
const { Mamifero } = require("./Mamifero");
const { Ave } = require("./Ave");

const animal01 = new Animal(`JP`, 20)
const mamifero01 = new Mamifero("baleia", 20,"dourado", "brasil")
const ave01 = new Ave("kowalski", 20, "dourado", "hogwarts")

animal01.getInfo()

mamifero01.getInfo()


ave01.getInfo()

