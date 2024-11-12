const prompt = require("prompt-sync")();
const { VeiculoController } = require("../controllers/VeiculoController");
const controller = new VeiculoController();
const { bancoVeiculos } = require("../config/banco.js");

function iniciarSistema() {
    let opcao;
    do {
        console.log(" === Sistema de Gerenciamento de Veículos ===");
        console.log("1 - Adicionar Veículo");
        console.log("2 - Listar Veículos");
        console.log("3 - Editar");
        console.log("4 - Excluir");
        console.log("0 - Sair");
        opcao = prompt("Escolha uma opção: (0 a 4) ");
        switch (opcao) {
            case "1":
                adicionarVeiculo();
                break;
            case "2":
                controller.listarVeiculos();
                break;
            case "3":
                editarVeiculo();
                break;
            case "4":
                excluirVeiculo();
                break;
            case "0":
                console.log("Saindo do Sistema...");
                break;
            default:
                console.log("Opção Inválida");
        }
    } while (opcao !== '0');
}

function adicionarVeiculo() {
    const tipo = prompt("Digite o tipo de veículo (Carro/Moto/Veiculo): ");
    const marca = prompt("Digite a marca do veículo: ");
    const ano = parseInt(prompt("Digite o ano do veículo: "));
    const cor = prompt("Digite a cor do veículo: ");
    const modelo = prompt("Digite o modelo do veículo: ");

    controller.criarVeiculo(tipo, marca, ano, modelo, cor);
}

function editarVeiculo() {
    const indice = parseInt(prompt("Digite o índice que deve ser editado: "));
    const veiculo = bancoVeiculos[indice - 1];

    if (veiculo) {
        console.log("Veículo encontrado:");
        veiculo.getInfo();

        const novosDados = {};
        novosDados.marca = prompt("Digite a nova marca do veículo (ou Enter para manter): ") || veiculo.getMarca();
        novosDados.ano = parseInt(prompt("Digite o novo ano do veículo (ou Enter para manter): ")) || veiculo.getAno();
        novosDados.modelo = prompt("Digite o novo modelo do veículo (ou Enter para manter): ") || veiculo.getModelo();
        novosDados.cor = prompt("Digite a nova cor do veículo (ou Enter para manter): ") || veiculo.getCor();

        controller.editarVeiculo(indice, novosDados);
    } else {
        console.log("Informe um índice válido!");
    }
}

function excluirVeiculo() {
    const indice = parseInt(prompt("Digite o índice do veículo que deve ser excluído: "));
    if (indice >= 1 && indice <= bancoVeiculos.length) {
        bancoVeiculos.splice(indice - 1, 1);
        console.log("Veículo excluído com sucesso!");
    } else {
        console.log("Informe um índice válido!");
    }
}

iniciarSistema();
