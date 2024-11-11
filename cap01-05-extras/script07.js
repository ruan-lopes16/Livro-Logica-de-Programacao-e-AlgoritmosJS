/* 
Jogo de adivinhação: Implemente um jogo em que o computador escolhe um número aleatório e o usuário tenta adivinhar, 
recebendo dicas de "maior" ou "menor" a cada tentativa.
*/

const prompt = require('prompt-sync')();

const num = Math.floor(Math.random() * 100); // randomizando um número 0 - 100
let chute;
let tentativas = 0; // numero de tentativas - inicialmente 0

do {
    chute = Number(prompt('Digite um número: '));   // coletando info
    tentativas++;   // acrescentando/adicionando ao contador 'tentativas'

    if (chute > num) { // condições e informações sobre o chute
        console.log('O chute foi maior que o número secreto');

    } else if (chute < num) {
        console.log('O chute foi menor que o número secreto');

    } else {
        console.log(`Parabéns! Vocé acertou em ${tentativas} tentativas.`);
        break;
        
    }
    
} while (chute != num); // condição do + if else - será feita até que o numero seja DIFERENTE do num pensando pela máquina