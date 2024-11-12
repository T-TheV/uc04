const { Animal } = require("./Animal");

class Mamifero extends Animal{
    #tipoPelo
    #habitat
    constructor(nome, idade, tipoPelo, habitat){
        super(nome, idade)
        this.#tipoPelo = tipoPelo
        this.#habitat = habitat
    }
    get getTipoPelo(){
        return this.#tipoPelo
    }
    set setTipoPelo(valor){
        this.#tipoPelo = valor
    }
    get getHabitat(){
        return this.#habitat
    }
    set setHabitat(valor){
        this.#habitat = valor
    }
    emitirSom(){
        console.log(`O Mamifero ruge ou grunhe!`)
    }
    getInfo(){
        console.log( `Meu nome é ${this.getnome}, tenho ${this.getidade}, tenho uma pelagem ${this.getTipoPelo} e meu habitat é ${this.getHabitat}`)
    }
}
module.exports = { Mamifero }