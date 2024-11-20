const { Animal } = require("./Animal");
const { Mamifero } = require("./Mamifero");

class Ave extends Mamifero{
    #tipoBico
    #capacidadeVoo
    constructor(nome, idade, tipoBico, capacidadeVoo){
        super(nome, idade)
        this.#tipoBico = tipoBico
        this.#capacidadeVoo = capacidadeVoo
    }
    get gettipoBico(){
        return this.#tipoBico
    }
    set settipoBico(tipoBico){
        this.#tipoBico = tipoBico
    }
    get getcapacidadeVoo(){
        return this.#capacidadeVoo
    }
    set setcapacidadeVoo(capacidadevoo){
        this.#capacidadeVoo = capacidadevoo
    }
    emitirSom(){
        console.log("A ave canta ou pia")
    }
    getInfo(){
        console.log (`Nome: ${this.getnome}, idade: ${this.getidade}, tipo de bico: ${this.#tipoBico} e capacidade de voo: ${this.#capacidadeVoo}`)
    }
}

module.exports = { Ave }