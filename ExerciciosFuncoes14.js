/*
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. 
*/

vetor = [5,10,34,14,12,11,-34,17,22,45,86,78,29,-2,-5]

function VerificarMaiorMenor(vetor){
      let maior = vetor[0];
      let menor = 0;
      frase = ''
  
      for (let index = 0; index < vetor.length; index++) {
        if(vetor[index] > maior){
            maior = vetor[index]
        }else{
             if(vetor[index] < menor){
                menor = vetor[index]
             }
        }
          
      }

      frase += 'Numero ' + menor + ' e o menor\n'
      frase += 'Numero ' + maior + ' e o maior\n'     

      return frase
}

console.log(VerificarMaiorMenor(vetor))



