/* 
a - Uma farmácia está com uma promoção - Na compra de duas unidades de um mesmo  medicamento, o cliente recebe como desconto os centavos do valor total.
Elaborar um programa que leia descrição e preço de um medicamento. Informe o valor do produto na promoção.
*/

const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
    const remedio = frm.inMedicamento.value;
    const preco = parseFloat(frm.inPreco.value);

    const promo = preco % 1; // centavos de cada medicamento
    const total = 2 * (preco - promo);

    resp1.innerText = `Promoção de ${remedio}`;
    resp2.innerText = `Leve 2 por apenas R$${total.toFixed(2)} - desconto de R$${2*promo.toFixed(2)}`;
    
    e.preventDefault();
});