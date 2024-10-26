/* 
b ) Elaborar um programa que leia um número e calcule sua raiz quadrada. 
Caso a raiz seja exata (quadrado perfeito), informá-la, caso contrário, informe: ‘Não há raiz exata para …’ 
*/

const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const numero = Number(frm.inNumero.value);
    const raiz = Math.sqrt(numero);

    if (raiz % 1 === 0){ // ou if (Number.isInteger(raiz)) - tambem verifica se é inteiro
        resp.innerText = `Raiz quadrada para ${numero}: ${raiz.toFixed(2)}`;
    } else{
        resp.innerText = `Não há raiz exata para ${numero}.`;
    };

    e.preventDefault();
})