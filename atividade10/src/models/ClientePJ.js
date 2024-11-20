const {Cliente} = require('./Cliente');

class ClientePJ extends Cliente{
    #CNPJ

    constructor(nome, dataNascimento, telefone, email, CNPJ){
        super(nome, dataNascimento, telefone, email,);
        this.#CNPJ = CNPJ;
    }

    get getCNPJ(){
        return this.#CNPJ
    }

    set setCNPJ(CNPJ){
        this.#CNPJ = CNPJ
    }
}

module.exports = {ClientePJ}