/* 
Crie um programa que peça ao usuário um número e verifique se ele é positivo, negativo ou zero.
*/

const prompt = require('prompt-sync')();

const num = Number(prompt('Digite um número: '));   // coleta info

if ( num > 0 ){ // status do numero
    console.log (`Número ${num} é positivo`);

} else if ( num < 0 ){
    console.log (`O número ${num} é negativo`);

} else {
    console.log(`O número ${num} é zero`);
}