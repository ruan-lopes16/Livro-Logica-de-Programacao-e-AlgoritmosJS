/*
b - Elaborar um programa para uma lan house de aeroporto - O programa deve ler o valor de cada 15min de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15min devem ser cobradas de forma integral. 
*/

const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const preco = parseFloat(frm.inPreco.value);
    const minutos = Number(frm.inMinutos.value);

    const tempo = Math.ceil(minutos / 15); // arredonda p/ cima
    const total = preco * tempo;

    resp.innerText = `Valor a pagar R$${total.toFixed(2)}`;
    
    e.preventDefault();
})