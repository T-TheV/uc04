class Produto {
    #nome;
    #preco;

    constructor(nome, preco) {
        this.#nome = nome
        this.#preco = preco
        Object.freeze(this)
    }

    set setNome(nome){
        this.#nome = nome
    } 
    set setPreco(preco){
        this.#preco = preco
    }
    get getNome(){
        return this.#nome
    }
    get getPreco(){
        return this.#preco
    }


    getInfoProduto() { //retorna nome e preço do produto 
        return (`O nome do produto é: ${this.#nome}, e o valor dele é: R$ ${this.#preco}!`)
    }
}

module.exports = { Produto }