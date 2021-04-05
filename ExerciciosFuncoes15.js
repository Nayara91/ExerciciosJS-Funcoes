/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/
vetor = [5,10,34,14,12,11,-34,17,22,45,86,78,29,-2,-5]

function ContarNegativos(vetor){

       let frase =''
       let qtdnegativo = 0;
       let quais = '';

       vetor.forEach(element => {
                  
            if(element < 0){
                 
                  qtdnegativo++
                  
                  quais += element + ','

            }

       });

       frase += 'Existem ' +qtdnegativo + ' Numeros negativos neste vetor\n'
       frase += 'Sao eles\n' + quais
       return frase;


}

console.log(ContarNegativos(vetor))

