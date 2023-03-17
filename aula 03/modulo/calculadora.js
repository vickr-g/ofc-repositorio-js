/****************************************************************
 * objetivo: arquivo de funcoes para calculos matematico
 * data: 03/02/2023
 * autor: victoria gindre
 * versao: 1.0
 ***************************************************************/

// função para realizar calculos matematicos 
function calculadora(numero1, numero2, tipoCalculo) {
    //retirando conteudo dos argumnetos 
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo;
    let resultado;

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2;

    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2;

    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2;

    } else if (operacao == 'DIVIDIR') {
        resultado = valor1 / valor2;

        if (valor2 == 0) {
            console.log('ERRO: Impossivel fazer divisão por 0')
        } else {
            resultado = valor1 / valor2
        }
    } else {
        console.log('ERRO: A sua escolha de operação não é válida');
        entradaDados.close();
    } 
    

    //Validação para tratar quando a varavel resultado não for processada por algum problema
    if (resultado == undefined) {
        return false;
    } else {
        return resultado;
    }

}
//permite adicionar  uma function no escopo global :} 
//as fuction que naoo estiveram aqui o exports, serao tratada apenas como escopo local..... p r i v a t e
module.exports ={
    calculadora
}




