const { ContaPoupanca } = require('./contaPoupanca');

const poupanca01 = new ContaPoupanca('David', 5);

console.log(poupanca01.getSaldo);

poupanca01.setSaldo = 500;

console.log(poupanca01.getSaldo);

poupanca01.atualizarRendimneto();

console.log(poupanca01.getSaldo);