const {dataBaseNotebook} = require('../config/dataBaseNotebook');
const {Notebook} = require('../models/Notebook');


class ControllerNotebook{
    criarNotebook(numeroDeSerie, marca, modelo, cor, valor){
        try {
            const novoNotebook = new Notebook(numeroDeSerie, marca, modelo, cor, valor);
            dataBaseNotebook.push(novoNotebook);
            console.log("Notebook adicionado com sucesso!");
            return novoNotebook
        } catch (error) {
            console.error("Erro ao adicionar notebook", error.message);
        }
    }

    listarNotebooks(){
        try {
            const notebooks = dataBaseNotebook.map( notebook => ({
                numeroDeSerie: notebook.getNumeroDeSerie,
                marca: notebook.marca,
                modelo: notebook.modelo,
                cor: notebook.cor,
                valor: notebook.getValor
            }))
            console.table(notebooks);
        } catch (error) {
            console.error("Erro ao listar notebooks", error.message);
        }
    }

    buscarNotebook(numeroDeSerie){
        try{
            const notebook =  dataBaseNotebook.find(n => n.getNumeroDeSerie === numeroDeSerie);
            if(!notebook){
                console.log("Notebook não encontrado.", numeroDeSerie);
                return;
            }
            console.log('Notebook encontrado:');
            console.table([notebook]);
            return notebook;
        }catch(error){
            console.error("Erro ao buscar notebook:", error.message);
        }
    }

    editarNotebook(numeroDeSerie, marca, modelo, cor, valor){
        try {
            const notebook = this.buscarNotebook(numeroDeSerie);
               if(notebook){
                notebook.marca = novaMarca;
                notebook.modelo = novoModelo;
                notebook.cor = novaCor;
                notebook.setValor = novoValor;
                return notebook;
               }

        } catch (error) {
            console.error('Erro ao tenta editar notebook', error.message);
        }
    }

    excluirNotebook(numeroDeSerie){
        try {
            const notebook = this.buscarNotebook(numeroDeSerie);
              if(notebook){
                const index = dataBaseNotebook.findIndex(n => n.getNumeroDeSerie === numeroDeSerie);
                const notebookRemovido = dataBaseNotebook.splice(index, 1);
                console.log('Excluido com sucesso')
                return notebookRemovido;     

              }
        } catch (error) {
            console.error('Erro ao remover o notebook do sistema', error.message)
        }
    }

    excluirTodosNotebook(){
        try {
            if(dataBaseNotebook.length > 0){
                dataBaseNotebook.length = 0;
            };
        } catch (error) {
            console.error('Erro ao tenta excluir tudo', error.message);
        }
    }
}

module.exports = {ControllerNotebook};