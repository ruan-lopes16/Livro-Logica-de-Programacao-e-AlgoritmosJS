/*
Elaborar um programa para simular um parquimetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. 
O programa deve informar o tempo de permanência do veículo no local e o troco (se existir). 
Se o valor for inferior ao tempo mínimo, exiba a mensagem “Valor insuficiente”. Considerar os valores/tempos da tabela: img/tabela.jpg
*/

const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener( 'submit', (e) => {
    e.preventDefault();

    const valor = parseFloat( frm.inValor.value );

    if( valor <= 0 ){
        resp1.innerText = 'Valor insuficiente';

    } else if ( valor > 1 && valor < 1.75 ){
        resp1.innerText = 'Tempo de permanência: 30 min';
        resp2.innerText = `Troco: R$${( valor - 1 ).toFixed( 2 )}`;

    } else { 
        resp1.innerText = 'Tempo de permanência: 60 min';
        resp2.innerText = `Troco: R$${( valor - 1.75 ).toFixed( 2 )}`;
        
    }
});