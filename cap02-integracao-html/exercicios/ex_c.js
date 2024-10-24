/*  
c - Um supermercado está com uma promoção - Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto(para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após apresente as mensagens indicando a promoção.
*/

const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
    const produto = frm.inProduto.value;
    const preco = parseFloat(frm.inPreco.value);

    const desconto3 = preco * 0.5; // desconto de 50% para 3° pd
    const total = 3 * preco - desconto3; // 3 produtos de X preço - o desconto de 50% do 3° pd

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$${total.toFixed(2)}`;
    resp2.innerText = `Leve 3 por apenas R$${desconto3.toFixed(2)}`;
    
    e.preventDefault();
})