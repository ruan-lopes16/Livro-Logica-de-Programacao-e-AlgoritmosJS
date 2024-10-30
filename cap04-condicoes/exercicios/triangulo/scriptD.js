/* 
Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo.
Para formar um triângulo, um dos lados nao pode ser maior que a soma dos outros dois. 
Caso possam formar um triângulo, exiba também qual o tipo de triângulo:
-Equilátero(3 lados iguais) 
-Isósceles(2 lados iguais) 
-Escaleno(3 lados diferentes). 
*/

const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener( 'submit', ( e ) => {
    e.preventDefault();

    const ladoA = Number( frm.inLadoA.value );
    const ladoB = Number( frm.inLadoB.value );
    const ladoC = Number( frm.inLadoC.value );

    if ( ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA ) {
        resp1.innerText = 'Os lados informados formam um triângulo';

        if ( ladoA == ladoB && ladoA == ladoC ) {
            resp2.innerText = 'Tipo de triângulo: Equilaítero';

        } else if ( ladoA == ladoB || ladoA == ladoC || ladoB == ladoC ) {
            resp2.innerText = 'Tipo de triângulo: Isoceles';

        } else {
            resp2.innerText = 'Tipo de triângulo: Escaleno';
        }

    } else {
        resp1.innerText = 'Os lados informados não formam um triângulo';
        resp2.innerText = '';
    }

});