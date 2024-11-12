class Jogador {
    #nome
    #aposta
    constructor(nome, aposta) {
        this.#nome = nome
        this.#aposta = aposta

    }
    get getNome(){
        return this.#nome
    }
    set setNome(nome){
        this.#nome = nome
    }

    get getAposta(){
        return this.#aposta
    }
    set setAposta(nome){
        this.#nome = nome
    }
    apresentarDados(){
        console.log(`Nome do jogador: ${this.getNome}, Aposta: ${this.getAposta}`)
    }
    }

    module.exports = {Jogador}
    
    // let jogador01 = new Jogador("Jorel", 4)

    // jogador01.apresentarDados()