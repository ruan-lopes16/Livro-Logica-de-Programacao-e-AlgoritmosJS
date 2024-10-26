/*
1 ) Programa que faça leitura do nome e das notas de uma aluno, apresenta a média e uma mensagem para o aluno: “Parabéns… Você foi aprovado!(a)” ou então “Ops… Você foi reprovado(a)”. 
A situação de aprovado e reprovado é definida pela média das notas, que deve ser 7.0 ou superior para aprovação e caso inferior para reprovação.
*/

const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
    const nota1 = parseFloat(frm.inNota1.value);
    const nota2 = parseFloat(frm.inNota2.value);
    let media = (nota1 + nota2) / 2;

    if (media >= 7) {       // condição para aprovado
        resp1.innerText = `Parabéns ${frm.inNome.value}! você foi aprovado!`;
        console.log(`Parabéns ${frm.inNome.value}! você foi aprovado!`);
        resp1.style.color = 'green';
    } 
    else if( media >= 4) { // condição para exame
        resp1.innerText = `Vamos para o exame, ${frm.inNome.value}!`;
        console.log(`Vamos para o exame, ${frm.inNome.value}!`);
        resp1.style.color = 'blue';
    } 
    else {                // condição para reprovado
        resp1.innerText = `Ops ${frm.inNome.value}, você foi reprovado(a)`;
        console.log(`Ops ${frm.inNome.value}, você foi reprovado(a)`);
        resp2.style.color = 'red';
    }
    resp2.innerText = `Sua média foi de ${media.toFixed(2)} pontos.`;
    console.log(`Sua média foi de ${media.toFixed(2)} pontos.`);

    e.preventDefault();
})