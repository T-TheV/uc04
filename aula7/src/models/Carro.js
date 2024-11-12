const { Veiculo } = require("./Veiculo");

class Carro extends Veiculo {
    #modelo;
    #cor;

    constructor(marca, ano, modelo, cor) {
        super(marca, ano);
        this.#modelo = modelo;
        this.#cor = cor;
    }

    getModelo() {
        return this.#modelo;
    }

    setModelo(modelo) {
        this.#modelo = modelo;
    }

    getCor() {
        return this.#cor;
    }

    setCor(cor) {
        this.#cor = cor;
    }

    calcularValor() {
        console.log(`Valor estimado do carro: R$ ${(2024 - this.getAno()) * 10000}`);
    }

    getInfo() {
        console.log(`O modelo é: ${this.getModelo()}, a marca é: ${this.getMarca()}, a cor é: ${this.getCor()}, e o ano é: ${this.getAno()}.`);
    }
}

module.exports = { Carro };
