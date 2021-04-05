/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function SaquesNotas(valor){
      qtd = 0;

    notas = 'O valor Informado de R$ ' + parseFloat(valor).toFixed(2) + ' , Distribuido em notas de ..:\n';

      while(valor != 0){
           if(valor > 100){
               resto = valor%100
                if(resto == 0){
                    qtd = valor/100;
                  return   notas = notas + ' ' + qtd + ' Notas de 100 Reais\n' 
                }
                qtd = valor/100
                if(qtd != 0){
                  notas = notas + ' ' + parseInt(qtd) + ' Notas de 100 Reais \n'
                }
               valor = resto;
           }

           if(valor >= 50 && valor < 100 ){
            resto = valor%50
             if(resto == 0){
                 qtd = valor/10;
                  return notas = notas + ' ' + parseInt(qtd) + ' Notas de 50 Reais \n'
                   
             }
             qtd = valor/50
             if(qtd != 0){
              notas = notas + ' ' + parseInt(qtd) + ' Notas de 50 Reais \n'
            }
         valor = resto;
 
         }

         if(valor >= 10 &&  valor < 50 ){
            resto = valor%10
             if(resto == 0){
                 qtd = valor/10;
                 return notas = notas + ' ' + parseInt(qtd) + ' Notas de 10 Reais \n'

             }
             qtd = valor/10
             if(qtd != 0){
              notas = notas + ' ' + parseInt(qtd) + ' Notas de 10 Reais \n'
            }

            valor = resto;
 
         }

         if(valor >= 1 &&  valor < 10){
            resto = valor%1
             if(resto == 0){
                 qtd = valor/1;
                  return notas = notas + ' ' + parseInt(qtd) + ' Notas de 1 Real\n'

             }
             qtd = valor/1
             if(qtd != 0){
              notas = notas + ' ' + parseInt(qtd) + ' Notas de 1 Real\n'
            }

            valor = resto;
 
         }
 

      }


}

pegaNotas =  SaquesNotas(720);

console.log(pegaNotas);





