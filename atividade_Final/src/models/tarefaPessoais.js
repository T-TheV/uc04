const {Tarefa} = require('./tarefa');

class TarefaPessoais extends Tarefa{
    #prioridade;
    #data;

    constructor(descricao, status, prioridade, data){
        super(descricao, status);
        this.#prioridade = prioridade;
        this.#data = data;

        Object.freeze(this);
    }

    get getPrioridade(){
        return this.#prioridade;
    }

    set setPrioridade(prioridade){
        this.#prioridade = prioridade;
    }

    get getData(){
        return this.#data;
    }

    set setData(data){
        this.#data = data
    }

    getInfo(){
        console.log(`Descrição: ${this.getDescricao}
Status: ${this.getStatus}
Prioridade: ${this.getPrioridade}
Data: ${this.getData}`)
    }
}

module.exports = {TarefaPessoais}
 