const { Dado } = require("./dado")
const { Jogador } = require("./jogador")



class SistemaAzar{
#dado
#jogador
    constructor(dado, jogador){
        if(dado instanceof Dado && jogador instanceof Jogador){
            this.#dado = dado
            this.#jogador = jogador
        }
        else{
            console.log("Dados não correspondentes.")
        }
        Object.freeze(this)
    }
    get getDado(){
        return this.#dado
    }
    set setDado(dado){
        this.#dado = dado
    }

    get getJogador(){
        return this.#jogador
    }
    set setJogador(jogador){
        this.#jogador = jogador
    }

    verificarGanhar(){
        if(this.#dado.getFace === this.#jogador.getAposta){
            console.log( "Você ganhou!")
            this.#jogador.apresentarDados()
           
        }
        else{
            console.log( "Você perdeu!")
        
        }
    }

}
module.exports = {SistemaAzar}
