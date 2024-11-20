class Produto {
    #nome;
    #preco; 
  
    constructor(nome, preco){
        this.#nome = nome
        this.#preco = preco
    }
   
   get getNome(){
    return this.#nome
   }
   
   get getPreco(){
    return this.#preco
   }

   set setNome(nome){
     this.#nome = nome;
   }

   set setpreco(preco){
    this.#preco = preco;
   }

   getInfoProduto(){
    return `${this.#nome} - R$${this.#preco}`
   }
}


module.exports = { Produto }