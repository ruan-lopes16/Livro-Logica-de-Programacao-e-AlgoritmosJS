// Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.

const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');  // pegando id das respostas
const resp2 = document.querySelector('#outResp2');
const resp3 = document.querySelector('#outResp3');

frm.addEventListener('submit', (e) => {
    const car =  frm.inVeiculo.value;                   // pegando o valor do campo inVeiculo que estava no form(frm) e atribui a variável car
    const preco = parseFloat(frm.inPreco.value);        // pegando o valor do campo inPreco que estava no form(frm) e atribui a variável preco

    const entrada = preco * 0.5;                // calculando entrada
    const parcela = (preco - entrada) / 12;     // calculando parcelas

    resp1.innerText = `Promoção: ${car}`;          // exibindo respostas
    resp2.innerText = `Entrada de 50% = R$${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$${parcela.toFixed(2)}`;

    e.preventDefault();                         // evita envio form
});