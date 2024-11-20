const { conta, Conta } = require('./conta')

class ContaPoupanca extends Conta{
       #taxaJuros

      constructor(titular, taxaJuros){
         super(titular);
         this.#taxaJuros = taxaJuros;
      } 

      get getTaxaJuros(){
       return this.#taxaJuros
      }

      set setTaxaJuros(taxaJuros){
       this.#taxaJuros = taxaJuros
      }

      atualizarRendimneto(){
         const rendimento = this.getSaldo * (this.#taxaJuros/100);
         this.setSaldo = rendimento
      }
}

module.exports = {ContaPoupanca}