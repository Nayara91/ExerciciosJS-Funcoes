/*
Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. 
*/
function ImprimiFrase(){
   qtd = 11
    let frase = '';
    i = 1
    while(qtd != 0){
     
         frase += "("+(i)+") Hello Word!\n"
         qtd--
         i++

    }

     return frase;
     
}

console.log(ImprimiFrase())

