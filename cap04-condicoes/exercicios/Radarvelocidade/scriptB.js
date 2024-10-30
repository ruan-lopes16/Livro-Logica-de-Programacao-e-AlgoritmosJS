/* 
Elaborar um programa que leia a velocidade permitida em um estrada e a velocidade de um condutor. 
- Se a velocidade for inferior ou igual à permitida, exiba “Sem multa”;
- Se a velocidade for de até 20% que a permitida, exiba “Multa leve”;
- Se a velocidade for superior a 20% da velocidade permitida, exiba “Multa grave”;
*/

const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener( 'submit', (e) => {
    const velocidadePermitida = Number( frm.inVelocidadePermitida.value );
    const velocidadeCondutor = Number( frm.inVelocidadeCondutor.value );

    if ( velocidadeCondutor <= velocidadePermitida ){
        resp.innerText = 'Você não foi multado. Continue assim!';

    } else if ( velocidadeCondutor >= velocidadePermitida * 1.2 ){
        resp.innerText = 'Você foi multado, sua velocidade excedeu o limite da via, portanto, MULTA LEVE. CUIDADO!';

    } else {
        resp.innerText = 'Você foi multado, a velocidade excedeu 20% do limite da via, portanto, MULTA GRAVE. SEU DELINQUENTE!!!';

    }
    
    e.preventDefault();
})