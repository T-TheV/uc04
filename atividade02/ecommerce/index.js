const prompt = require("prompt-sync")();
const { Produto } = require("./ProdutosEPedidos/Produto");
const { Pedido } = require("./ProdutosEPedidos/Pedido");

function adicionarProdutosAoPedido(){
    const pedido = new Pedido();
    while(true){
        const nome = prompt("Digite o nome do produto( ou 'sair' para finalizar)")
        if(nome.toLowerCase()==='sair') break;
        const preco = parseFloat(prompt("Digite o preço do produto: "))
        if(isNaN(preco) || preco <=0){
            console.log("Preço inválido. Tente Novamente!")
            continue;
        }
        const produto = new Produto(nome, preco);
        pedido.adicionarProduto(produto)
        console.log(`Produto ${produto.getNome} adicionado com sucesso!`)
    }
    pedido.mostrarPedido()
}


const produto01 = new Produto('Camiseta', 60);
const produt02 = new Produto("Bermuda", 600)
const produto03 = new Produto("Tênis", 5000)

const pedido01 = new Pedido();
pedido01.adicionarProduto(produto01);
pedido01.adicionarProduto(produto03);

pedido01.mostrarPedido()
pedido01.calcularTotal()
adicionarProdutosAoPedido()