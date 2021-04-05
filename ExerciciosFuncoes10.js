/*
Fazer um programa para encontrar todos os pares entre 1 e 100. 
*/

function EncontrarPares(){
   let  pares = []
   let  numero = 1
   let  resto = 0;
   let  frase = '';
    while(numero <= 100){
 
          resto = numero%2
          if(resto == 0){
              pares.push(numero)
          }

        numero++
    }
 
     frase += "Numeros Pares entre 1 a 100 \n"
     pares.forEach(element => {
           frase += element + ","
     });

    return frase

}

console.log(EncontrarPares())
