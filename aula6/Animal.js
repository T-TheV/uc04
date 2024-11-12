class Animal {
    #nome
    #idade
    constructor(nome, idade){
        this.#nome = nome
        this.#idade = idade
    }
    get getnome(){
        return this.#nome
    }
    set setnome(nome){
        this.#nome = nome
    }
    get getidade(){
        return this.#idade
    }
    set setidade(idade){
        this.#idade = idade
    }
  
    emitirSom(){
        console.log(`O animal emite um som genérico`)
    }
    getInfo(){
        console.log(`nome: ${this.getnome},idade: ${this.getidade}.`)
    }
}

module.exports = { Animal }