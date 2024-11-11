/* 
Crie um programa que peça ao usuário uma nota de 0 a 10. 
Imprima uma mensagem informando se o aluno foi 
aprovado (nota >= 7), reprovado (nota < 5) ou em recuperação (nota >= 5 e nota < 7).
*/

const prompt = require('prompt-sync')();

const nota = Number(prompt('Digite uma nota de 0 a 10: ')); // coleta nota

if ( nota >= 7 ){   // status do aluno
    console.log('O Aluno(a) está aprovado');

} else if ( nota < 5 ){
    console.log('O Aluno(a) está reprovado');

} else {
    console.log('O Aluno(a) está em recuperação');
}