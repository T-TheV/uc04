const {ControllerNotebook} = require('../controller/controllerNotebook');
const { Notebook } = require('../models/Notebook');
const controller = new ControllerNotebook();

console.log(' ==== Criando Notebooks ==== ')
controller.criarNotebook('fffff', 'fdfdsfdsf', 'efwefwefewf', 'wdfwefe', 22)

console.log(' === Listando Notebooks ===');
controller.listarNotebooks();

controller.buscarNotebook('fffff');

controller.excluirNotebook('fffff')

controller.listarNotebooks();