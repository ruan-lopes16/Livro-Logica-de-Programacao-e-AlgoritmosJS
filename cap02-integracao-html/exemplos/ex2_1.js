// cria referência ao elemento h3 (onde está a resposta)

const frm = document.querySelector("form");
const resp = document.querySelector("h3");



// cria ouvinte de evento para quando o formulário(submit) for enviado

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value;      // obtem o valor do campo inNome que está no form(frm) e atribui ao variável nome
    // const nome = document.querySelector("form").inNome.value; //substitui a linha 11
    resp.innerText = `Olá ${nome}!`;     // exibe a resposta

    e.preventDefault();                // evita o envio do formulário
});