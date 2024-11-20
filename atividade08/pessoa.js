//Como iniciar

class Pessoa {
    // nome;
    // rg;
    // cpf;
    // idade;
    // sexo;
    // nacionalidade;
    // estadoCivil;

    exibirDados(){
        console.log(`
            Dados Pessoais: \n
            Nome: ${this.nome},
            RG: ${this.rg},
            CPF: ${this.cpf},
            Idade: ${this.idade},
            Sexo: ${this.sexo},
            Nacionalidade: ${this.nacionalidade},
            Estado Civil: ${this.estadoCivil},`)

    }
    constructor(nome, rg, cpf, idade, sexo, nacionalidade, estadoCivil){

        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.estadoCivil = estadoCivil;
    }
    getNome(){
        return this.nome;
    }
    getRg(){
        return this.rg;
    }
    getCpf(){
        return this.cpf;
    }
    getIdade(){
        return this.idade;
    }
    getSexo(){
        return this.sexo;
    }
    getNacionalidade(){
        return this.nacionalidade;
    }
    getEstadoCivil(){
        return this.estadoCivil
    }
}

let pessoa01 = new Pessoa("David",1010, 2020, 21, "masc", "br", "solt")
console.log(pessoa01.getNome());
pessoa01.exibirDados()