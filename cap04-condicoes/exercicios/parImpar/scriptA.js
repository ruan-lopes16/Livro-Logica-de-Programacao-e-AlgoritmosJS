/* 
Elaborar um programa que leia um numero. Informe se ele é par ou impar. 
Faça com if…else tradicional e, após tente criar a condição com operador ternário.
*/

const frm = document.querySelector( 'form' );
const resp = document.querySelector( 'h3' );

frm.addEventListener ( 'submit', (e) => {
    const num = Number ( frm.inNum.value );            // coleto o número

//  simplicando if com op. ternário...
    const resultado = num % 2 == 0 ? resp.innerText = `O número ${ num } é par.` : resp.innerText = `O número ${ num } é impar.`;

/*
    if ( num % 2 == 0 ){
        resp.innerText = `O número ${num} é par.`;
    } else { 
        resp.innerText = `O número ${num} é impar.`;
    };
*/

    e.preventDefault();
});