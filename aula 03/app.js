/**************************************************************
 * Objetivo: Calcular numeros utilizando as qutros operaçoes.
 * Autor: Victoria Gindre
 * Data: 3/02/2023
 * Versão: 1.0
 **************************************************************/

 
var matematica = require ('./modulo/calculadora.js');
// import da biblioteca
var readline = require('readline');

//cria um objeto para manipular as entrada de dados 
 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//valor1
 entradaDados.question('valor:\n', function(numero1){
    //replace localiza o caracter e substitui pelo ponto
    let valor1 = numero1.replace(',','.');
//valor2
 entradaDados.question('valor2 \n', function(numero2){
    let valor2 = numero2.replace(',','.');
//tipo operacao
 entradaDados.question('escolha uma operacao matematica: [SOMAR || SUBTRAIR || MULTIPLICAR || DIVIDIR] \n', function(tipoCalculo){
    let operacao = tipoCalculo.toLocaleUpperCase;
    let resultado;

 if( valor == '' || valor2 == '' || operacao == ''){
    console.log('erro: nao é possivel calcular se o valor estiver vazio');
    //validação para entradade dados numericos
 }else if(isNaN(valor1) || isNaN(valor2)){
    console.log('erro:nao é possivel calcular se os dados digitados nao forem numeros...')
}else{
    resultado = matematica.calculadora(valor1, valor2, operacao);
    console.log(resultado);
    //converte uma string em maiusculo -- tolowecase em minusculo.
}
});
});
});
  
