// Elaborar um programa para um restaurante que leia o preço por kg e o consumo(em gramas) de um cliente.

const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const quilo = parseFloat(frm.inQuilo.value);
    const consumoCliente = parseFloat(frm.inConsumo.value);
    const total = quilo * (consumoCliente / 1000);

    resp.innerText = `Valor total a ser pago R$${total.toFixed(2)}`;
    
    e.preventDefault();
});