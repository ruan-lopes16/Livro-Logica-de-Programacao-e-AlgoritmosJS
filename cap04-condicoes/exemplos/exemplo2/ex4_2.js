/* 
O programa vai calcular o peso ideal de uma pessoa. Para isso, foram pesquisados alguns sites sobre o assunto. 
Em um deles, há a indicação de que o peso ideal de um adulto pode ser calculado a partir de fórmulas: 22*altura**2(para homens) e 21*altura**2(para mulheres).
*/

const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value;
    const masculino = frm.inMasc.checked; // deixando uma das opções já marcadas
    const altura = parseFloat(frm.inAltura.value);
    
    let peso; // apenas declarando a variavel para ser alterada no futuro

    if (masculino){ // calculo masculino
        peso = 22 * Math.pow(altura, 2);
        resp.innerText = `${nome}, seu peso ideal é ${peso.toFixed(2)} kg`;
    } 
    else{ // calculo feminino
        peso = 21 * Math.pow(altura, 2);
        resp.innerText = `${nome}, seu peso ideal é ${peso.toFixed(2)} kg`;
    }

    e.preventDefault();
});

frm.addEventListener('reset', () => { // resetando página e h3/resp
    resp.innerText = '';
});