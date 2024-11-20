const prompt = require("prompt-sync")();
const { Produto } = require("./produto");
const { Pedido } = require("./pedido");

function adicionarProdutosAoPedido(){
    const pedido = new Pedido();
    while(true){
        const nome = prompt("Digite o nome do produto(ou 'sair' para finalizar)");
        if(nome.toLowerCase() === 'sair') break;
        const preco = parseFloat(prompt("Digite o preço do produto:"));
        if(isNaN(preco) || preco <= 0){
            console.log("Preço inválido. Tente novamente");
            continue;
        }
        const produto =  new Produto(nome, preco);
         pedido.adicionarProduto(produto);
         console.log(`Produto "${produto.getNome}" adicionado com sucesso!`)
    }
    pedido.mostrarPedido();
}

adicionarProdutosAoPedido();

// const produto01 = new Produto ("Camisa", 192);
// const produto02 = new Produto ("Tenis", 3212);
// const produto03 = new Produto ("boné", 100);

// const pedidos = new Pedido();
// pedidos.adicionarProduto(produto02);
// pedidos.adicionarProduto(produto03);

// pedidos.mostrarPedido();
// pedidos.calcularTotal();
