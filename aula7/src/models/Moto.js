const { Veiculo } = require("./Veiculo");

class Moto extends Veiculo {
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
        console.log(`Valor estimado da moto: R$ ${(2024 - this.getAno()) * 10000}`);
    }

    getInfo() {
        console.log(`A marca é: ${this.getMarca()}, o ano é: ${this.getAno()}, a cor é: ${this.getCor()}, e o modelo é: ${this.getModelo()}.`);
    }
}

module.exports = { Moto };
