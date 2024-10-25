// soma de 2 números

const prompt = require('prompt-sync')();            //adiciona pacote p/ entrada de dados

const num1 = Number(prompt('1° número: '));          // lê os números
const num2 = Number(prompt('2° número: '));

const soma = num1 + num2;                            // calcula a soma

console.log(`A soma de ${num1} e ${num2} é: ${soma}`)   //resultado