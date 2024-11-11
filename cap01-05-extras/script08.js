/*
Calculadora simples: 
Crie uma calculadora que realize as quatro operações básicas 
(adição, subtração, multiplicação e divisão), permitindo que o usuário escolha a operação.
*/

const prompt = require( 'prompt-sync' )();

let escolha = parseFloat( prompt( '\nEscolha uma das opções: \n 1- Adição\n 2- Subtração\n 3- Multiplicação\n 4- Divisão\n\nDigite o número da opção: ' ) );

let num1;
let num2;

while( escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4 ){
    console.log( '\nOpção inválida!\n' );
    
    escolha = parseFloat( prompt( '\nEscolha uma das opções: \n 1- Adição\n 2- Subtração\n 3- Multiplicação\n 4- Divisão\n\nDigite o número da opção: ' ) );
}

if ( escolha == 1 || escolha == 2 || escolha == 3 || escolha == 4 ){
    switch ( escolha ){
        case 1:
            console.log( '\nAdição\n' );
            num1 = parseFloat( prompt( 'Digite um número: ' ) );
            num2 = parseFloat( prompt( 'Digite outro número: ' ) );

            console.log( `A soma de ${num1} e ${num2} é: ${ (num1 + num2).toFixed(2) }` );

        break;

        case 2:
            console.log( '\nSubtração\n' );
            num1 = parseFloat( prompt( 'Digite um número: ' ) );
            num2 = parseFloat( prompt( 'Digite outro número: ' ) );
        
            console.log( `A subtração de ${num1} e ${num2} é: ${ (num1 - num2).toFixed(2) }` );

        break;

        case 3:
            console.log( '\nMultiplicação\n' );
            num1 = parseFloat( prompt( 'Digite um número: ' ) );
            num2 = parseFloat( prompt( 'Digite outro número: ' ) );
        
            console.log( `A multiplicação de ${num1} e ${num2} é: ${ (num1 * num2).toFixed(2) }` );
        
        break;

        case 4:
            console.log( '\nDivisão\n' );
            num1 = parseFloat( prompt( 'Digite um número: ' ) );
            num2 = parseFloat( prompt( 'Digite outro número: ' ) );
        
            console.log( `A divisão de ${num1} e ${num2} é: ${ (num1 / num2).toFixed(2) }` );

        break;
        
        default:
       
    }
}