/* 
Crie um programa que peça ao usuário seu nome e sua idade. 
Em seguida, imprima uma mensagem personalizada, como "Olá, [nome]! Você tem [idade] anos."
*/

const prompt = require('prompt-sync')();            //adiciona pacote p/ entrada de dados

const nome = prompt('\nDigite seu nome: ');         // pega info do usuario
const idade = Number(prompt('Digite sua idade: '));

console.log( '\n-----------------------------------------' );   // exibe
console.log( `Olá, ${nome}! Voce tem ${idade} anos.` );
console.log( '-----------------------------------------\n' );