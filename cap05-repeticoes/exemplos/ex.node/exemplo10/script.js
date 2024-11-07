/*
c ) Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente deseja parcelar esse valor(em boletos ou carnê).
Para facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos, 
ou seja, centavos apenas na última parcela. Informe como resposta o valor de cada parcela , considerando essa situação
*/

const prompt = require('prompt-sync')();

const valor = Number(prompt('Valor da compra: R$'));
const num = Number(prompt('N° de parcelas: '));

const valorParcelas = Math.floor(valor / num);                  // calcula valor sem decimais - sem os centavos
const valorFinal = valorParcelas + (valor % num);               // calcula parcela final - com os centavos

for( let i = 1; i < num; i++){              // enquanto i < num
    console.log(`${i}° parcela: R$${valorParcelas.toFixed(2)}`);     
}
console.log(`${num}° parcela R$${valorFinal.toFixed(2)}`);      // ultima parcela