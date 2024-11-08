/*
Elaborar um programa que leia um número e verifique se ele é ou não é perfeito.
Um número dito perfeito é aquele que é igual à soma dos seus dividores inteiro(exceto o próprio número) 
O programa deve exibir os divisores do número e a some deles.
*/

const frm = document.querySelector( 'form' );
const resp = document.querySelector( 'pre' );

frm.addEventListener( 'submit', (e) => {
    e.preventDefault();

    const num = Number( frm.inNum.value );

    let somaDivisores = 0;
    let divisoresString = "Divisores de " + num + ": ";

    for ( let divisores = 1; divisores <= num / 2; divisores++ ){
        if ( num % divisores == 0 ){
            somaDivisores += divisores;
            divisoresString += divisores + " ";
        }
    }

    if ( somaDivisores == num ) {
        resp.innerText = `${ num } é um número perfeito.\n${ divisoresString }`;

    } else {
        resp.innerText = `${ num } não é um número perfeito.`;
    }
    
});