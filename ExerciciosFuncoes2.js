/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */


function EscreverExtenso(numero){
    switch (numero) {
        case 0:
           return "zero"
        case 1:
           return "UM"
        case 2:
           return "DOIS"
        case 3:
           return "TRES"
        case 4:
           return "QUATRO"
        case 5:
           return "CINCO"
        case 6:
           return "SEIS"
        case 7:
           return "SETE"
        case 8:
           return "OITO"
        case 9:
           return "NOVE"
        case 10:
           return "DEZ"
        default:
           return "FORA DO INTERVALO";
    }
    
}

let leia_numero = EscreverExtenso(2);
    console.log("ESCREVENDO .: " + leia_numero);
    leia_numero = EscreverExtenso(11);
    console.log("ESCREVENDO .: " + leia_numero);



