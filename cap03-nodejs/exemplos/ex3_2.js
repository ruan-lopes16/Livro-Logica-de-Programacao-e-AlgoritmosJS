// revenda de carro

const prompt = require('prompt-sync')();            //adiciona pacote p/ entrada de dados

const veiculo = prompt('Veículo: ');                // dados do veiculo
const preco = Number(prompt('Preço: '));

const entrada = preco * 0.5;                        // calcula entrada
const parcela = (preco - entrada) / 12;                    // calcula parcela

console.log('--------------------------------');     // separa as respostas

console.log(`Promoção: ${veiculo}`);                 // respostas
console.log(`Entrada de R$${entrada.toFixed(2)}`);
console.log(`+12x de R$${parcela.toFixed(2)}`);