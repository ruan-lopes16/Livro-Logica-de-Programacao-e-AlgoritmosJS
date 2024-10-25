/* a ) Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. 
Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final.
*/

const prompt = require('prompt-sync')();            //adiciona pacote p/ entrada de dados

const salario = Number(prompt('Salário do funcionário: R$'));       // coletando dados
const tempo = Number(prompt('Anos de empresa: '));

const quad = Math.floor(tempo / 4);             // qtd de quadrienios
const aumento = salario * 0.01;                 // aumento por quadrienio
const novoSalario = salario + (aumento * quad); // novo salário com os aumentos

console.log(`\nQuantidade de quadrienios: ${quad}`);
console.log(`Salário final: R$${novoSalario.toFixed(2)}`);