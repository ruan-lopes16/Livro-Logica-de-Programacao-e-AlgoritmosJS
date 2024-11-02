const frm = document.querySelector( 'form' );
const resp1 = document.querySelector( '#outResp1' );
const resp2 = document.querySelector( '#outResp2' );

let listaDescEVal = '';      // string vazia, será usada p/ armazenar a lista de descrições e valores
let numContas = 0;      // inicializa contador p/ contar o número total de CONTAS...
let valTotal = 0;       // e acumulador (variaveis globais) p/ CALCULAR O VALOR TOTAL das contas

frm.addEventListener( 'submit' , (e) => {
    e.preventDefault();

    const descricao = frm.inDescricao.value;            // coleta os dados do form
    const valor = parseFloat( frm.inValor.value );

    numContas++;                    // incrementa o contador de contas - NumContas
    valTotal += valor;              // adiciona valor atual ao total ou: valTotal = valTotal + valor,
    listaDescEVal += descricao + ` - R$ ${ valor.toFixed(2) }\n`;     // pega a descrição(inDescrição) e concatena com o valor(inValor)

    resp1.innerText = `${ listaDescEVal }-------------------------------`; // divide a listaDescEVal do total de contas
    resp2.innerText = `${ numContas } conta(s) - Total R$ ${ valTotal.toFixed(2) }`;   // Exibe o número total de contas e o valor total delas

    frm.inDescricao.value = '';     // limpa os campos...
    frm.inValor.value = '';
    frm.inDescricao.focus();        // ... e posiciona no campo inDescricao do form

} )