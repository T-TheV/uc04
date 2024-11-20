class Animal{
    #nome
    #idade
    #corPelo

   constructor(nome, idade, corPelo){
    this.#nome = nome;
    this.#idade = idade;
    this.#corPelo = corPelo;
   } 

  emitirsom(){
    console.log(`${this.#nome} emiti um som!`)
  }

   get getNome(){
    return this.#nome
   }

}

module.exports = {Animal}