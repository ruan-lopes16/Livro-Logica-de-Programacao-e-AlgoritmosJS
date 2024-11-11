/*
Crie um programa que peça ao usuário números até que ele digite 0. 
Ao final, imprima a soma de todos os números digitados.
*/

const prompt = require('prompt-sync')();

console.log('\nDigite 0(zero) para sair')

let num;
let soma = 0;

if ( num != 0 ){
    for ( let count = 0; num != 0; count++ ){   // contador igual a 0; desde que nao seja seja 0, sera incrementado de 1 em 1
        num = Number(prompt('Digite um número: ')); // coleta numero para somar ao final
        soma += num;    // soma os numeros que serão digitados ao longo do programa

    }
}

console.log('\nAté mais!');
console.log(`Soma dos números digitados: ${soma}\n\n`); // exibe o resultado