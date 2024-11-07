const frm = document.querySelector( 'form');
const resp = document.querySelector( 'pre' );

frm.addEventListener( 'submit', (e) => {
    e.preventDefault();

    const num = Number( frm.inNumero.value );
    
    let estrelas = '';          // variável que irá concatenar as estrelas/laços - se inicia vazia
    for ( let i = 1; i <= num; i++ ){
        if ( i % 2 == 1 ){ 
            estrelas = estrelas + '*';        // na posição impar do i: *
        } else {
            estrelas = estrelas + '-';        // na posição par do i: -
        }
    }
    console.log( estrelas );
    resp.innerText = estrelas;      // exibe
    
});