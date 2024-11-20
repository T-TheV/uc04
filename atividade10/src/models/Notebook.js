class Notebook{
    #numeroDeSerie;
    #valor;

    constructor(numeroDeSerie, marca, modelo, cor, valor){
        this.#numeroDeSerie = numeroDeSerie;
        this.#valor = valor;
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    get getNumeroDeSerie(){
        return this.#numeroDeSerie
    }

    get getValor(){
        return this.#valor
    }

    set setNumeroDeSerie(numeroDeSerie){
        this.#numeroDeSerie = numeroDeSerie
    }

    set setValor(valor){
        this.#valor = valor
    }

    getInfo(){
        console.log(`Numero de Serie: ${this.#numeroDeSerie}
Marca: ${this.marca}
Modelo: ${this.modelo}
Cor: ${this.cor}
Valor: ${this.#valor}`)
    }


}

module.exports = {Notebook}
