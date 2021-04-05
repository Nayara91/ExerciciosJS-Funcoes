/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/
vetor = [1,5,10,34,14,12,11,17,22,45,78,29]

function VerificarIntervalo(vetor){
    let no_intervalo = ''
    let fora_intervalo = ''
    let frase = '';
    let n = 0;
    let f = 0;

    for (let i = 0; i < vetor.length; i++) {

         if(vetor[i] < 10 || vetor[i] > 20 ){
             fora_intervalo += vetor[i]+' Fora do intervalo\n'
             f++

         }else{
             no_intervalo += vetor[i]+' Dentro do intervalo\n'
             n++
         }

         
    }
     frase += fora_intervalo
     frase += no_intervalo
     frase += "Conclusao \n" + f + ' Numeros Fora do Intervalo\n'
     frase += n + ' Numeros Dentro do Intervalo\n'

     return frase;

}

console.log(VerificarIntervalo(vetor))
