const prompt = require("prompt-sync")();
const { Jogador } = require("./jogador");
const { Dado } = require("./dado");
const { SistemaAzar } = require("./sistemaAzar")



function executar() {

    let novoTurno = '';
    console.log("Bem-vindo ao Sistema Azar 1.0")
    do {
        const nome = prompt("Qual o nome do jogador: ")
        const aposta = parseInt(prompt("Digite um valor de 1 a 6: "))
        const lance = new Dado();
        const jogador01 = new Jogador(nome, aposta);
        const tigrinho = new SistemaAzar(lance, jogador01);
        tigrinho.verificarGanhar();
        console.log(novoTurno)
        novoTurno = prompt("Digite S para nova aposta ou N para sair: ")
        novoTurno = novoTurno.toUpperCase()
        console.log(novoTurno)
    }while(novoTurno !== 'N');
    console.log("Até logo!")
}
executar()