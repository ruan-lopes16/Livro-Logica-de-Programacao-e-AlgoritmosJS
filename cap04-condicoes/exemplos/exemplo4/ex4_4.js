/* 
Sabendo que o fuso horário da França em relação ao Brasil é de +5 horas (no horário de verão na França),
elaborar um programa que leia a hora no Brasil e informe a hora na França.
*/

const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const horaBR = parseFloat(frm.inHora.value);

    let horaFranca = horaBR + 5; // calcula fuso

    if(horaFranca > 24){    // se passar de 24h
        horaFranca = horaFranca - 24;
    };

    e.preventDefault();

    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}h`;
});