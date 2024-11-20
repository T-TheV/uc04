const {Notebook} = require('./Notebook')

class Estoque{

    #id;

    constructor(id, produtos, quantidade){3
        try {
            if(produtos instanceof Notebook)
                this.#id = id;
            this.produtos = produtos;
            this.quantidade = quantidade;
        } catch (error) {
            console.error('Não é permitido criar Estoque');
        }
       
    }

    get getId(){
        return this.#id
    }

    set setId(novoId){
        this.#id = novoId
    }

}

module.exports = {Estoque}