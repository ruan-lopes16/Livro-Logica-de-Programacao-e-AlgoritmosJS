/*
Crie um programa que imprima os números de 1 a 10 utilizando um loop
*peça ao usuário até quanto deseja ir a contagem - melhorando**
*/

// primeira maneira
for (let i = 1; i <= 10; i++){
    console.log(i);
};


// melhorando*
const prompt = require('prompt-sync')();

console.log('\nDigite um numero para ver sua contagem');
const numFinal = Number(prompt('Digite um número: ')); // coleta info

for(let count = 0; count <= numFinal; count++){ // contador inicia com 0; vai até o numero digitado; de 1 em 1
    console.log(count); // exibe a contagem
}