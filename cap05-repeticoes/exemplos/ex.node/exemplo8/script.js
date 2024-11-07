/* a ) A Copa do Mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos de 1942 e 1946 (Segunda Guerra Mundial).
Construir um programa que repita a leitura de números(anos) até ser digitado 0.

Informe cada ano se ele é ou não ano de Copa do Mundo.
*/

const prompt = require('prompt-sync')();
console.log('Programa anos de Copa do Mundo.\nDigite 0(zero) para sair');
console.log('----------------------------------------------------------');

do { 
    const ano = Number(prompt('Ano: '));
    if ( ano == 0 ) {
        break; // sair da repetição

    } else if ( ano == 1942 || ano == 1946  ){
        console.log(`Não houve Copa do Mundo no ano de ${ano}. (Segunda Guerra Mundial).`);

    } else if ( ano >= 1930 && ano % 4 == 2 ) {
        console.log(`No ano de ${ano}, houve Copa do Mundo!`);

    } else {
        console.log(`No ano de ${ano}, não houve Copa do Mundo.`);
    }
    
} while (true);