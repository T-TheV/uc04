const {prompt} = require('prompt-sync')();
const {ControllerNotebook} = require('../controller/controllerNotebook');
const controller = new ControllerNotebook();

function iniciarSistema(){
    let opcao;

    do {
        console.log('==== Estoque de Notebooks ====');
        console.log('1. Adcionar Notebook');
        console.log('2. Editar Notebooks');
        console.log('3. Listar Notebooks');
        console.log('4. Excluir Notebooks');
        console.log('5. Sair do Sistema')

        opcao = prompt ('Escolha uma opção:');

        switch (opcao) {
            case 1:
               adicionarNotebook();
                break;
            case 2:
                  
                break;
            case 3:
            ControllerNotebook.listarNotebook() ;  
            default:
                break;
        }
    } while (opcao!=='5');
}


function adicionarNotebook(){
    const numeroDeSerie = prompt("Digite o Numero de Serie: ");
    const marca = prompt('Digite a Marca do Notebook: ');
    const modelo = prompt('Digite o Modelo do Notebook: ');
    const cor = prompt('Digite a Cor do Notebook: ');
    const valor = prompt('Digite o valor do Notebook: ');

    ControllerNotebook.criarNotebook(numeroDeSerie, marca, modelo, cor, valor);
}

iniciarSistema();