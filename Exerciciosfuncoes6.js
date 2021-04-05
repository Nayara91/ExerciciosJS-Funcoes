/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. 
*/

function CalculaAnuidade(mes,valor){
    let taxa = 0.05;

    switch (mes) {
        case 1:
            return "valor de anuidade no mes de Janeiro foi de .: \n" + valor.toFixed(2) + " \n";
        case 2:
            valor = (valor * taxa) + valor
            return "valor de anuidade no mes de Fevereiro foi de .: \n" + valor.toFixed(2) + " \n";
        case 3:
            for (let i = 1; i < 3; i++) {
                valor = (valor * taxa) + valor
            }
           return "valor de anuidade no mes de Março foi de .: \n" + valor.toFixed(2) + " \n";
        case 4:
            for (let i = 1; i < 4; i++) {
                valor = (valor * taxa) + valor
            }
           return "valor de anuidade no mes de Abril foi de .: \n" + valor.toFixed(2) + " \n";
         case 5:
            for (let i = 1; i < 5; i++) {
                valor = (valor * taxa) + valor
            }
           return "valor de anuidade no mes de Maio foi de .: \n" + valor.toFixed(2) + " \n";
         case 6:
            for (let i = 1; i < 6; i++) {
                valor = (valor * taxa) + valor
            }
           return "valor de anuidade no mes de Junho foi de .: \n" + valor.toFixed(2) + " \n";
         case 7:
            for (let i = 1; i < 7; i++) {
                valor = (valor * taxa) + valor
            }
           return "valor de anuidade no mes de Julho foi de .: \n" + valor.toFixed(2) + " \n";
         case 8:
            for (let i = 1; i < 8; i++) {
                valor = (valor * taxa) + valor
            }
           return "valor de anuidade no mes de Agosto foi de .: \n" + valor.toFixed(2) + " \n";
         case 9:
            for (let i = 1; i < 9; i++) {
                valor = (valor * taxa) + valor
            }
           return "valor de anuidade no mes de Setembro foi de .: \n" + valor.toFixed(2) + " \n";
         case 10:
            for (let i = 1; i < 10; i++) {
                valor = (valor * taxa) + valor
            }
           return "valor de anuidade no mes de Outubro foi de .: \n" + valor.toFixed(2) + " \n";
         case 11:
            for (let i = 1; i < 11; i++) {
                valor = (valor * taxa) + valor
            }
           return "valor de anuidade no mes de Novembro foi de .: \n" + valor.toFixed(2) + " \n";
         case 12:
           for (let i = 1; i < 11; i++) {
            valor = (valor * taxa) + valor
           }
       return "valor de anuidade no mes de Dezembro foi de .: \n" + valor.toFixed(2) + " \n";

           default:
            return "NAO FOI POSSIVEL CALCULA A ANUIDADE \nMes invalido ou Valor incorreto!"
    }


}
console.log(CalculaAnuidade(1,200))
console.log(CalculaAnuidade(2,200))
console.log(CalculaAnuidade(3,200))
console.log(CalculaAnuidade(4,200))
console.log(CalculaAnuidade(5,200))
console.log(CalculaAnuidade(6,200))
console.log(CalculaAnuidade(7,200))
console.log(CalculaAnuidade(8,200))
console.log(CalculaAnuidade(9,200))
console.log(CalculaAnuidade(10,200))
console.log(CalculaAnuidade(11,200))
console.log(CalculaAnuidade(12,200))



