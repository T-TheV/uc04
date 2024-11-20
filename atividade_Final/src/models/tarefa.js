class Tarefa{
    #descricao
    #status

    constructor(descricao, status){
           this.#descricao = descricao;
           this.#status = status;
           Object.freeze(this);
    }

    get getDescricao(){
        return this.#descricao;
    }

    set setDescricao(descricao){
        this.#descricao = descricao;
    }

    get getStatus(){
        return this.#status;
    }

    set setStatus(status){
        this.#status = status;
    }

    getInfo(){
        console.log(`Descrição: ${this.getDescricao}
Status: ${this.getStatus}`);
    }

    finalizarTarefa(){
        this.#status = "Finalizado"
        console.log('Tarefa Finalizada!');
    }
}

module.exports = {Tarefa}
