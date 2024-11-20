const { Veiculo } = require("../models/Veiculo.js");
const { Carro } = require("../models/Carro.js");
const { Moto } = require("../models/Moto.js");
const { bancoVeiculos } = require("../config/banco.js");

class VeiculoController {
    criarVeiculo(tipo, marca, ano, modelo, cor) {
        let veiculo;
        tipo = tipo.toLowerCase();  // Normalizando o tipo para minúsculas

        if (tipo === 'carro') {
            veiculo = new Carro(marca, ano, modelo, cor);
        } else if (tipo === 'moto') {
            veiculo = new Moto(marca, ano, modelo, cor);
        } else if (tipo === 'veiculo') {
            veiculo = new Veiculo(marca, ano);
        } else {
            console.log(`Tipo de veículo inválido: ${tipo}`);
            return;  // Para evitar adicionar um veículo inválido
        }

        bancoVeiculos.push(veiculo);
        console.log(`Veículo cadastrado com sucesso!`);
    }

    listarVeiculos() {
        if (bancoVeiculos.length > 0) {
            console.log(" ==== Veículos Registrados ====");
            bancoVeiculos.forEach((veiculo, index) => {
                console.log(`${index + 1}:`);
                veiculo.getInfo();
                veiculo.calcularValor();
            });
        } else {
            console.log("Nenhum veículo registrado!");
        }
    }

    editarVeiculo(indice, novosDados) {
        if (indice < 1 || indice > bancoVeiculos.length) {
            console.log("Informe um índice válido!"); // Adicionar verificação
            return;
        }

        const veiculoIndex = bancoVeiculos.findIndex((v, idx) => idx === indice - 1); // Corrigir a busca de índice
        if (veiculoIndex !== -1) {
            const novoVeiculo = bancoVeiculos[veiculoIndex];  // Acessando o veículo correto

            if (novosDados.marca) {
                novoVeiculo.setMarca(novosDados.marca);
            }
            if (novosDados.ano) {
                novoVeiculo.setAno(novosDados.ano);
            }
            if (novosDados.modelo) {
                novoVeiculo.setModelo(novosDados.modelo);  // Corrigir o acesso a `novosDados`
            }
            if (novosDados.cor) {
                novoVeiculo.setCor(novosDados.cor);
            }

            console.log(`Veículo atualizado com sucesso. Novos dados:`);
            novoVeiculo.getInfo();
            bancoVeiculos[veiculoIndex] = novoVeiculo;  // Atualizar o veículo no banco
        } else {
            console.log(`Veículo não encontrado com o índice ${indice}.`);
        }
    }

    buscarId(indice) {
        if (indice < 1 || indice > bancoVeiculos.length) {
            console.log("Informe um índice válido!"); // Adicionar verificação
            return;
        }

        const veiculo = bancoVeiculos[indice - 1];  // Ajuste no índice
        if (veiculo) {
            console.log("Veículo encontrado:");
            veiculo.getInfo();
        } else {
            console.log(`Veículo não encontrado com o índice ${indice}.`);
        }
    }
}

module.exports = { VeiculoController };
