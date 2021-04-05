/*
Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

vetor = [3,4,5,12,45,23,7,14,9,22,21,17,79,50]

function LerVetor(array){
     let i = 0;
     let p = 0;
     let impares = ''; 
     let pares = '';
     let frase = '';
    
    array.forEach(element => {
       if(element%2 == 0){
           pares += element+','
           p++;           
       }else{
           impares += element+','
           i++           
       }
        
    });
    frase += 'Os numeros impares sao .:  ' + impares + ' Num total de ' + i + ' Numeros\n'
    frase += 'Os numeros pares sao .:  ' + pares + ' Num total de ' + p + ' Numeros\n'


    return frase    
}
  

console.log(LerVetor(vetor))
