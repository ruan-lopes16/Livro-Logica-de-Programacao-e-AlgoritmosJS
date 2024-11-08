/*
Elaborar um programa que leia o nome de uma fruta e um número.
O programa deve repetir a exibição do nome da fruta, de acordo com o número informado.
Utilize “*” para separar os nomes
*/

const frm = document.querySelector( 'form' );
const resp = document.querySelector( 'pre' );

frm.addEventListener( 'submit', (e) => {
    e.preventDefault();

    const fruta = frm.inFruta.value;
    const num = Number(frm.inQuantidade.value);

    let count;
    for ( count = 1; count <= num; count++ ) {
        if ( count < num ) {
            resp.innerText += `${fruta} * `;
        } else {
            resp.innerText += `${fruta}\n`;
        }
    }
})