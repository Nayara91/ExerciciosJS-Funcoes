/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. 
*/

function CriancaCrescimento(alt1,tx1,alt2,tx2){
     alt1 = alt1 * 100; //converter altura em metros para centimetros
     alt2 = alt2 * 100; //converter altura em metros para centimetros
     //tx1 e tx2 ja esta em centimetros    
     
     let anos = 0;
     let frase = '';
      

     if(alt1 > alt2){
         frase += 'Criança  2  é a menor\n'
          if(tx2 > tx1){
               while (alt2 <= alt1){
                   alt2 = alt2 + tx2
                   alt1 = alt1 + tx1
                   anos++
               }
              frase += 'Criança 2 ultrapassar em ' + anos + ' anos a Altura da Criança 1\n'
          }else{
              frase += 'Criança 2 jamais ira ultrapassar a Criança 1\nSua Taxa de Crescimento e Menor Tambem!!!\n'
          }

        }else if(alt2 > alt1){
            frase += 'Criança  1  é a menor\n'
            if(tx1 > tx2){
                while ( alt1 <= alt2){
                    alt1 = alt1 + tx1
                    alt2 = alt2 + tx2
                    anos++
                }
               frase += 'Criança 1 ultrapassar em ' + anos + ' anos a Altura da Criança 2\n'
           }else{
               frase += 'Criança 1 jamais ira ultrapassar a Criança 2\nSua Taxa de Crescimento e Menor Tambem!!!\n'
           }

        }else{
            frase += 'Ambas sao do Mesmo Tamanho\nNada a Fazer!\n'

        }
        
        return frase

     }
    

console.log(CriancaCrescimento(0.90,3,1,1.5));
console.log(CriancaCrescimento(0.70,2,0.70,1.5));


