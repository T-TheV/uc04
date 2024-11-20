const { Produto } = require("./produto");

class Pedido{
    #Produtos

   constructor(){
    this.#Produtos = []
    Object.freeze(this)
   } 

   adicionarProduto(novoProduto){
    if(novoProduto instanceof Produto){
        this.#Produtos.push(novoProduto)
    }else{
        console.log("Somente objetos do tipo produto pode ser adicionados!")
    }

   }

   mostrarPedido(){
    console.log("Resumo do pedido:")
    this.#Produtos.forEach(produto => {
        console.log(produto.getInfoProduto())
    })
    console.log(`Total = ${this.calcularTotal()}`)
   }
   calcularTotal(){
     return this.#Produtos.reduce((total, produto)=> total + produto.getPreco, 0);
   }
}



module.exports = { Pedido }