const {Tarefa} = require('../models/tarefa');
const {TarefaPessoais} = require('../models/tarefaPessoais');
const {TarefaProfissionais} = require('../models/tarefaProfissionais');
const {databaseTarefa} = require('../config/databaseTarefa');

class TarefaController{

    criarTarefa(id, descricao, status, prioridade, data){
        let tarefa 
        if(id.toLowerCase() === 'Tarefas'){
            tarefa = new Tarefa(descricao, status)
        } else if(id.toLowerCase() === 'TarefasPF'){
            tarefa = new TarefaProfissionais(descricao, status, prioridade, data)
        } else if(id.toLowerCase() === 'TarefasPV'){
            tarefa = new TarefaPessoais(descricao, status, prioridade, data)
        } else {
            console.lof('Tipo de tarefa invalida.')
            return;
        }
        databaseTarefa.push(tarefa);
        console.log('Tarefa cadastrada com sucesso!');
    }

    listarTarefa(id){
        if(databaseTarefa.length > 0 && id.toLowerCase === 'Tarefas'){
            
        }
    }
}