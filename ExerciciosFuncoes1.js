//Um funcionário irá receber um aumento de acordo com o seu plano de
//trabalho, de acordo com a tabela abaixo:
/*
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
*/
const A = 10;
const B = 15;
const C = 20;

function PlanoTrabalho(plano, salario){
     novosalario = 0;
      if(plano == 10){
         console.log('funcionario esta incluido no plano A');
         novosalario = (salario * 0.10) + salario;         
         return novosalario;
      }else if(plano == 15){
         console.log('funcionario esta incluido no plano B');
         novosalario = (salario * 0.15) + salario; 
         return novosalario;
      }else if(plano == 20){
         console.log('funcionario esta incluido no plano C');
         novosalario = (salario * 0.20) + salario;
         return novosalario;
      }

}

novosalrio = PlanoTrabalho(A, 2000);
console.log('NOVO REAJUSTE SALARIAL DE .:' + novosalario);

