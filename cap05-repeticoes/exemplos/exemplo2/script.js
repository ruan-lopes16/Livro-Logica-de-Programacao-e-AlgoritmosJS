// programa para decrescer um número até 1

const frm = document.querySelector( 'form' );
const resp = document.querySelector( 'pre' );

frm.addEventListener( 'submit', (e) => {
    const num = Number( frm.inNumero.value );
    let resposta = `Entre ${num} e 1: `;

    for ( let i = num; i >= 1; i-- ){

        if( i == 1 ){ // verifica se o ultimo numero da repetição é 0, se for, colocar o ponto final (.)
            resposta = resposta + i + '.';          // pego a resposta, concateno ela a ao numero q está em i (na repetição) e por fim o ponto

        } else { // caso não seja o ultimo, colocar virgula(,)
            resposta = resposta + i + ', ';

        }
        
    }

    resp.innerText = resposta;
    e.preventDefault();
})