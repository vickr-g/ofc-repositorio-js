//comentario em linha
/* 
comentario
em
bloco
*/

// permite exibir no terminal uma mensagem
console.log('Testando o Node.Js');

// no js criar uma variael para guardar coisas

//import da blibiotec que permite entrada de dados via teclado 
var readline = require('readline');

// objeto que vai ser especialista na enrada de dados via teclado
var entradaDados = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout
});

//CallBack - Uma função de CallBack permite que na própria linha de programação
//seja uma variavel, um processamento, a chamada de um metodo possa acontecer
//um retorno de dados automaticamente, sem precisar sair deste processamento.
/*
criar uma interação com o usuario para entarada de dados.
apos o usuario digitar o conteudo o objeto entrada permite retornar  o conteudo digitado parar ser utilizado 
isso acontece atraves de uma função de callback
 */
entradaDados.question('por favor, digite seu nome! \n', function(none){
console.log('Bem vindo(a), ' + none + ' ao servidor node.js')
});