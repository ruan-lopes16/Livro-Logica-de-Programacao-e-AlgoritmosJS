/* 
A entrada para um clube de pesca custa R$20,00 por pessoa e cada pessoa tem direito a levar um peixe. 
Peixes extras custam R$12,00. 
Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. 
Informe o valor a pagar.
*/

const prompt = require('prompt-sync')();

const pessoas = Number(prompt('N° de pessoas: '));
const peixes = Number(prompt('N° de peixes: '));

let total;                  // declara o total

if(peixes <= pessoas){      // condição do exemplo
    total = pessoas * 20;   
} 
else {
    total = (pessoas * 20) + ((peixes - pessoas) * 12); // caso passe a condição do exemplo
}

console.log(`Total a pagar: R$${total.toFixed(2)}`);