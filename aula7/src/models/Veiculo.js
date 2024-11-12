class Veiculo {
    #ano;
    #marca;
    
    constructor(marca, ano) {
        this.#marca = marca;
        this.#ano = ano;
    }

    getMarca() {
        return this.#marca;
    }

    setMarca(marca) {
        this.#marca = marca;
    }

    getAno() {
        return this.#ano;
    }

    setAno(ano) {
        this.#ano = ano;
    }

    getInfo() {
        console.log(`Marca: ${this.getMarca()}, Ano: ${this.getAno()}`);
    }

    calcularValor() {
        throw new Error('Método: calcularValor() deve ser implementado.');
    }
}

module.exports = { Veiculo };
