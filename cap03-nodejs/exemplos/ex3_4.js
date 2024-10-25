/* Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. 
Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas). 
*/

const prompt = require('prompt-sync')();            //adiciona pacote p/ entrada de dados

const racao = parseFloat(prompt('Ração (kg): '));   // coletando dados
const consumo = parseFloat(prompt('Consumo diário do gato(gr): '));

const duracao = Math.floor((racao*1000) / consumo);             // calculo da duração da ração
const sobra = (racao * 1000) % consumo;                         // calculo da sobra da ração

console.log('');

console.log(`Duração da ração: ${duracao} dias`); // exibindo resposta
console.log(`Sobra da ração: ${sobra}gr`);