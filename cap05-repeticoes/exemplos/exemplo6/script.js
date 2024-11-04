const frm = document.querySelector( 'form' );
const resp = document.querySelector( 'pre' );

frm.addEventListener( 'submit', (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    
/*  let numDivisores = 0;               // declara e inicializa contador

    for ( let i = 1; i <= num; i++ ){   // irá iterar de 1 até o número inserido pelo usuário // a cada iteração, o valor de i representará um possível divisor do número
        if ( num % i == 0 ){            // verifica se i -> 1, 2, 3... é divisor de num...
            numDivisores++;             // ...se sim, incrementa contador, ou seja, acrescenta 1 ao numero de divisores por num
        }
    }

    if( numDivisores == 2 ){             // se possuir apenas 2 divisores, é primo
        resp.innerText = `${ num } é primo.`;

    } else {
        resp.innerText = `${ num } não é primo.`

    } */
    
    let temDivisor = 0;                     // declara e inicializa a variavel flag(sinalizadora) - booleana

    for ( let i = 2; i <= num / 2; i++ ){   // Iniciamos um loop for para verificar todos os números de 2 até a metade de num. Por que até a metade? Se um número tiver um divisor maior que sua metade, ele também terá um divisor menor que sua metade.
        if ( num % i == 0 ){                // se tem um divisor
            temDivisor = 1;                 // Se encontrarmos um divisor, alteramos temDivisor para 1 e usamos break para sair do loop, pois já sabemos que o número não é primo
            break;
        }
    }
    if ( num > 1 && !temDivisor ){ // se num > 1 e não possuir divisor // Verificamos se o número é maior que 1 (condição para ser primo) e se não possui nenhum divisor (temDivisor é 0).
        resp.innerText = `${num} é primo`;
    } else {
        resp.innerText = `${num} não é primo`;
    }
})