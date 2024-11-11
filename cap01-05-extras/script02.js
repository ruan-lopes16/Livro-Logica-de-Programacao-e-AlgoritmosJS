/*
Crie um programa que peça ao usuário um número e verifique se ele é par ou ímpar.
*/

const prompt = require('prompt-sync')();

console.log( '\n Digite um número para saber se ele é par ou ìmpar' );  // msg de exibição

const num = Number(prompt( 'Digite um número:' ));  // coleta info

if ( num % 2 == 0 ){    // se for par - resto de divisao = 0
    console.log(`O número ${num} é par\n`); 

} else {    // se não... ímpar
    console.log(`O número ${num} é ímpar\n`)
}