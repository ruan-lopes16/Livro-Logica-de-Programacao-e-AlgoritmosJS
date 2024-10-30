// Programa de multiplicação

const frm = document.querySelector( 'form' );
const resp = document.querySelector( 'pre' );

frm.addEventListener( 'submit', (e) => {
    e.preventDefault();
    
    const numero = Number( frm.inNumero.value ); // obtem numero informado

    let resposta = ''; // variável que receberá a resposta - inicialmente vazia

    // cria laço de repetição (i começa e é incrementado até 10)
    for( let i = 1; i <= 10; i++ ) {
        resposta += `${numero} x ${i} = ${i * numero}\n`;
    }

    // conteudo da tag pre alterado, exibindo a resposta
    resp.innerText = resposta;
} )