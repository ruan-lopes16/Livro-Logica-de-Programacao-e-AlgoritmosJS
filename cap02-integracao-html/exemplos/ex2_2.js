// Elaborar um programa para um Cinema, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos.

const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const titulo = frm.inTitulo.value; // pega o valor do campo inTitulo que está no form(frm) e atribui a variável titulo
    const duracao = Number(frm.inDuracao.value); // pega o valor do campo inDuracao que está no form(frm) e atribui ao variável duracao

    const horas = Math.floor(duracao / 60); // calcula as horas do filme
    const minutos = duracao % 60; // calcula os minutos do filme

    resp.innerText = `O filme ${titulo}, tem duração de ${horas} horas e ${minutos} minutos.`; // exibe a resposta

    e.preventDefault(); // evita envio do form
})