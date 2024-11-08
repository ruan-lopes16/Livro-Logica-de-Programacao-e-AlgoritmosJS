/**
Digamos que o número de chinchilas de uma fazenda triplica a cada, após o primeiro.
Elaborar um programa que leia o número inicial de chincilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. 
O número inicial de chincilas deve ser maior ou igual a 2 (um casal) 
*/

const frm = document.querySelector( ' form' );
const resp = document.querySelector( 'pre' );

frm.addEventListener( 'submit', (e) => {
    e.preventDefault();

    let chinchila = Number( frm.inChinchila.value );
    const anos = Number( frm.inAnos.value );

    let totChinchila = chinchila; // ou totChinchila = 0;        // inicializa o total de chinchilas

    for ( let ano = 1; ano <= anos; ano++ ) {

        if( ano == 1 ){
            resp.innerText += `${ano}° ano: ${chinchila} chinchilas\n`;
        } else { 
            chinchila = chinchila * 3; // ou chinchila *= 3;        // triplica as chinchilas

            //totChinchila += chinchila; // ou totChinchila = totChinchila + chinchila;           // acumula o total de chinchilas
    
            resp.innerText += `${ano}° ano: ${chinchila} chinchilas\n`;
        }

    }

    /*
    const mediaChinchila = totChinchila / anos;
    resp.innerText += `\n\nMédia de Chinchilas no período de ${anos} anos é de ${mediaChinchila.toFixed(0)} chinchilas`;
    */
   
    resp.innerText += `\n\nNo período de ${anos} anos, terá aproximadamente ${chinchila} chinchilas`;
})