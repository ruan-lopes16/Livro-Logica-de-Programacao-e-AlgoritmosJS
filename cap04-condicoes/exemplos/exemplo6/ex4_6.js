/* 
Em determinado momento do dia, apenas notas de 10, 50 e 100 estão disponiveis em um terminal de caixa eletronico. 
Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade( ou seja, se pode ser pago com as notas disponiveis) 
e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque.
*/

const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');
const resp3 = document.querySelector('#outResp3');

frm.addEventListener('submit', (e) => {
    const saque = Number(frm.inSaque.value);

    if(saque % 10 != 0){                // se saque não multiplo de 10
        alert('Valor inválido para notas disponíveis (R$ 10, 50, 100)')
        frm.inSaque.focus();
        return;
    };

    const notasCem = Math.floor(saque / 100);   // calcula notas de 100
    let resto = saque % 100;                    // quanto sobra para pagar

    const notasCinquenta = Math.floor(resto / 50);  // calcula notas de 50
    resto = resto % 50;                             // quanto sobra para pagar

    const notasDez = Math.floor(resto / 10);        // calcula notas de 10

    if(notasCem > 0){                               // exibe as notas se houver
        resp1.innerText = `Notas de 100: ${notasCem}`;
    };
    if(notasCinquenta > 0){
        resp2.innerText = `Notas de 50: ${notasCinquenta}`;
    };
    if(notasDez > 0){
        resp3.innerText = `Notas de 10: ${notasDez}`;
    };

    e.preventDefault();
})