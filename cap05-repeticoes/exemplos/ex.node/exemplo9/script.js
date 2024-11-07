/*
b ) Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto. 
Exiba as etiquetas com o nome do produto, com no máximo duas 2 etiquetas por linha 
*/

const prompt = require ( 'prompt-sync' ) ( );
const produto = prompt ( 'Produto: ' );                         // nome do produto
const num = Number ( prompt ( 'N° de etiquetas: ' ) );          // qtd de etiquetas a serem impressas

// cria laço de repetição até num / 2 (pois imprime 2 etiquetas por linha)
for ( let i = 1; i <= num / 2; i++ ) { // Esse laço for é utilizado p/ imprimir as etiquetas em pares -> duas por linha. O laço irá se repetir até a metade do número total de etiquetas(num).
    console.log( `${ produto.padEnd(30) } ${ produto.padEnd(30) }` )    // .padEnd() -> alinhamento (padding ao final para preencher espaços em branco)
}
if ( num % 2 == 1 ){                                            // se qtd solicitada for impar
    console.log( `${ produto.padEnd(30) }` );                   // imprime +1
}