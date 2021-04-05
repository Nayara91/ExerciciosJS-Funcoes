/*
Escrever um programa para exibir os números de 1 até 50 na tela.
*/

function ExibirContagem(){
  i = 1
  frase = ''
   while(i <= 50){
  
       frase +=  "Contando .: (" + i +")\n"
       i++

    }
     return frase
}

console.log(ExibirContagem())
