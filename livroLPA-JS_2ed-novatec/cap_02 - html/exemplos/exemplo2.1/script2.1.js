//cria referência ao form e ao elemento h3(onde será a resposta)

const  frm = document.querySelector("form") // seleciona o elemento <form> no documento HTML
const resp = document.querySelector("h3")  // seleciona o elemento <h3> no documento HTML


//cria um "ouvinte" de evento, acionado quando botão submit for clicado
frm.addEventListener("submit",  (e) => { //'e' será gerado quando o evento 'submit' ocorrer/clicado
    const nome = frm.inNome.value //obtém o valor digitado no input de id=inNome no 'frm' que foi pego pelo id - linha3
    resp.innerText = `Olá, ${nome}!` //atualiza texto dentro de h3
    e.preventDefault() //evita envio do form e desaparecimento do que foi digitado e mostrado na tela - atualizando a página
})