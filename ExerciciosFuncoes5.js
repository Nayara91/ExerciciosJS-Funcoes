/*Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 
*/

function CalculaPlano(idade){
   const plano = 100;
   let admenos10 = 80;
   let adentre11e30 = 50;
   let adentre31e60 = 95;
   let admais60 = 130;
      if(idade < 10){
           return "Paciente com  idade de " + idade + " anos\n" + (plano + admenos10) + "  Reais de convenio medico \n"
      }else if(idade >= 10 && idade <= 30){
           return "Paciente com  idade de " + idade + " anos\n" + (plano + adentre11e30) + "  Reais de convenio medico\n"
      }else if(idade > 30 && idade <= 60){
        return "Paciente com  idade de " + idade + " anos\n" + (plano + adentre31e60) + "  Reais de convenio medico\n"
      }else{
        return "Paciente com  idade de " + idade + " anos\n" + (plano + admais60) + "  Reais de convenio medico\n"
      }
}

console.log(CalculaPlano(18));
console.log(CalculaPlano(2));
console.log(CalculaPlano(28));
console.log(CalculaPlano(45));
console.log(CalculaPlano(70));

