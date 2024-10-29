/* 
Uma farmácia necessita de um programa que leia o total de um compra. 
Exiba como resposta o n° máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela.
Considere as seguintes condições: 
1 - cada parcela deve ser de no mínimo R$20,00. 
2 - o número máximo de parcelas permitido é 6.
*/

const prompt = require('prompt-sync')();

const compra = parseFloat(prompt('Total da compra (R$): '));

const aux = Math.floor(compra / 20) // aux = n° de parcelas sem condições

// const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux; 
// se aux = 0, parcelas = 1; se aux > 6, parcelas = 6; senão, parcelas = aux
if(aux == 0){
    parcelas = 1;
}
else if(aux > 6){
    parcelas = 6;
}
else{ 
    parcelas = aux
};

const valorParcela = compra / parcelas;

console.log(`Pode pagar em ${parcelas}x de R$${valorParcela.toFixed(2)}`);