/***************************************************************
 * Objetivo: Calcular a media de quatro notas escolares.
 * Autor: Victoria Gindre
 * Data: 27/01/2023
 * Versão: 1.0
 **************************************************************/

//import da biblioteca de entrada de dados
var readline = require('readline');

//cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({ input: process.stdin, output: process.stdout })

/**
 * criacao de variveis
 * var - cria um espaço em memoria de escopo global para o projeto, ou seja
 essa variavel podera ser utilizada em qualquer pare do arquivo (varias funções).

 * let - cria um espaço em memoria de escopo local para o projeto, ou seja
 essa variavel somente podera ser utilizada dentro da função que foi criada. 

 * const - cria um espaço em memoria de escopo local ou global para o projeto, ou seja
 essa variavel podera ser utilizada em qualquer parte do projto e nunca sofrera alteração.
 */


//função de callback para entrar o nome do aluno
entradaDados.question('digite seu nome, por favor \n', function (nome) {

    //recebe o valor digitado pelo teclado 
    let nomeAluno = nome;

    //função de callback para entar nota 1
    entradaDados.question('digite a nota1: \n', function (nota1) {

        //recebe o valor digitado pelo teclado 
        let valor1 = nota1;


        //função de callback para entar nota 2
        entradaDados.question('digite a nota2: \n', function (nota2) {

            //recebe o valor digitado pelo teclado 
            let valor2 = nota2;

            //função de callback para entrar o nome do aluno
            entradaDados.question('digite a nota3: \n', function (nota3) {

                //recebe o valor digitado pelo teclado 
                let valor3 = nota3;
                //função de callback para entrar o nome do aluno
                entradaDados.question('digite a nota4: \n', function (nota4) {

                    //recebe o valor digitado pelo teclado 
                    let valor4 = nota4;
                    let media;
                    /**
                                     conversao de tipo de dados 
                     * parseint() ou number.parseint - converte uma string em inteiro
                     * parsefloat() ou number.parsefloat -  converte uma string em real 
                     * number converte sozinho dependendo da entrada do dado, converte string para numero, e define se sera inteiro ou real
                     * 
                     * 
                     * 
                     * 
                                operadores de comparacao 
                      
                     * == (verifica a igualdade entre conteudos)
                     * != (verifica a diferenca entre conteudos)
                     * <  (menor)
                     * >  (maior)
                     * <= (menor ou igual)
                     * >= (maior ou igual)
                     * ===(verf a igualdade entre conteudos e tipos de dados)
                     * !== (verf a diferenca entre conteudos e igualdade de tipo de dados)
                     * ==! (verf a igualdade ente conteudos e a diferença de tipos de dados)
                     ex:
                         0 === 0 V
                         0 === '0' F
                         0 == 0 v
                          0 == '0' V
                
                
                        ex:
                        Operadores Lógicos
                                     * 
                                     *  E           &&    AND
                                     *  OU          ||    OR
                                     *  NEGAÇÃO     !  NOT
                
                
                
                     */

                    //Validação para entrada vazia

                    if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '') {

                        console.log('erro: ha espaços sem valor atribuidos.')

                        //validaçao para entrada de texto(invalida)
                    } else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
                        console.log('erro: voce nao digitou um numero')
                        //validação para entarada de dados somente entre 0 e 10

                    } else if (valor1 < 0 || valor1 > 10 || valor2 < 0 || valor2 > 10 || valor3 < 0 || valor3 > 10 || valor4 < 0 || valor4 > 10) {
                        console.log('erro, os numeros devem ser entre 0 e 10.')

                    } else {
                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4;
                        console.log(media)
                        if (media < 7) {
                            console.log('Aluno reprovado')
                        } else {
                            console.log('Aluno aprovado')
                        }
                        console.log('sua media é ' + media.toFixed(1))
                    }

                });
            });

        });

    });

});
