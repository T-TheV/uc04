class Cachorro extends Animal{
    #raca

   constructor(nome,idade,corPelo,raca){
       super(nome,idade,corPelo) // Estou acionando o método contrutor da classe Pai
       this.#raca = raca;
   } 

   emitirsom(){ // novo comportamento de cachorro
       console.log(`Meu nome é ${this.getNome}, sou da raça ${this.#raca} e faço Au Au!`)
   }
}
module.exports = { Cachorro }