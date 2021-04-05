/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/


function AprovadoReprovado(cod,nota1,nota2,nota3){
    aluno = ["ivonei","junior","vinicius","joao","Kelvin","Igor","Antonio","Jubila","Diogo","Jean"]
    resultado = '';
    let mediaponderada = 0;
    index = cod;

    do{
        if(nota1 > nota2 && nota1 > nota3){

            mediaponderada = ((4*nota1) + (3*nota2) + (3*nota3)) / (4+3+3);

            resultado += (mediaponderada >= 5 ) ? "O aluno .:"+aluno[index-1] + " ESTA APROVADO\nNota1 ("+nota1+") Peso 4\nNota2 ("+nota2+") Peso 3\nNota3 ("+nota3+") Peso 3\nMedia do aluno foi de .: "+mediaponderada + "\n" :  "O aluno .:"+aluno[index-1]  +" ESTA REPROVADO\nNota1 ("+nota1+") Peso 4\nNota2 ("+nota2+") Peso 3\nNota3 ("+nota3+") Peso 3\nMedia do aluno foi de .: "+mediaponderada + "\n"        

        }else if(nota2 > nota1 && nota2 > nota3){

            mediaponderada = ((4*nota2) + (3*nota1) + (3*nota3)) / (4+3+3);

            resultado += (mediaponderada >= 5 ) ? "O aluno .:"+aluno[index-1]  +" ESTA APROVADO\nNota1 ("+nota1+") Peso 3\nNota2 ("+nota2+") Peso 4\nNota3 ("+nota3+") Peso 3\nMedia do aluno foi de .: "+mediaponderada + "\n" :  "O aluno .:"+aluno[index-1] +" ESTA REPROVADO\nNota1 ("+nota1+") Peso 4\nNota2 ("+nota2+") Peso 3\nNota3 ("+nota3+") Peso 3\nMedia do aluno foi de .: "+mediaponderada + "\n"         

        }else if(nota3 > nota1 && nota3 > nota2){

            mediaponderada = ((4*nota3) + (3*nota1) + (3*nota2)) / (4+3+3);

            resultado += (mediaponderada >= 5 ) ? "O aluno .:"+aluno[index-1] +" ESTA APROVADO\nNota1 ("+nota1+") Peso 3\nNota2 ("+nota2+") Peso 3\nNota3 ("+nota3+") Peso 4\nMedia do aluno foi de .: "+mediaponderada + "\n" :  "O aluno .:"+aluno[index-1] +" ESTA REPROVADO\nNota1 ("+nota1+") Peso 4\nNota2 ("+nota2+") Peso 3\nNota3 ("+nota3+") Peso 3\nMedia do aluno foi de .: "+mediaponderada + "\n"  
                   
        }else if(nota1 == nota2 && nota2 == nota3 && nota3 == nota1){
            mediaponderada = ((3*nota3) + (3*nota1) + (3*nota2)) / (nota1+nota2+nota3);

            resultado += (mediaponderada >= 5 ) ? "TODAS NOTAS IGUAIS \nO aluno .:"+aluno[index-1] +" ESTA APROVADO\nNota1 ("+nota1+") Peso 3\nNota2 ("+nota2+") Peso 3\nNota3 ("+nota3+") Peso 3\n" :  "O aluno .:"+aluno[index-1]  +" ESTA REPROVADO\nNota1 ("+nota1+") Peso 4\nNota2 ("+nota2+") Peso 3\nNota3 ("+nota3+") Peso 3\nMedia do aluno foi de .: "+mediaponderada + "\n"  
 
        }
    
      

    
      cod--  
    }while(cod < 0)

    
     return resultado;

}

console.log(AprovadoReprovado(10,8,5,4))
console.log(AprovadoReprovado(9,3,2,1))
console.log(AprovadoReprovado(8,9,9,9))
console.log(AprovadoReprovado(7,2,9,8))
console.log(AprovadoReprovado(6,3,3,2))
console.log(AprovadoReprovado(5,5,5,5))
console.log(AprovadoReprovado(4,6,5,1))
console.log(AprovadoReprovado(3,7,8,3))
console.log(AprovadoReprovado(2,3,9,0))
console.log(AprovadoReprovado(1,2,5,8))





