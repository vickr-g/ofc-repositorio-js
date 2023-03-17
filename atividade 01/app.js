/**************************************************************
 * Objetivo: Calcular notas dos alunos apresentando media e se ele foi aprovado ou nao.
 * Autor: Victoria Gindre
 * Data: 10/02/2023
 * Versão: 1.0
 **************************************************************/
var calcularMedia = require('./modulo/modulo.js')

var readline = require('readline');
const { exame } = require('./modulo/modulo.js');



//cria o objeto para ser especialista em entrada de dados pelo teclado ( nome do aluno)

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//nome aluno
entradaDados.question('nome do aluno:\n', function (nomeAluno) {
    //pega o nome digitado
    let nome1 = nomeAluno;
    entradaDados.question('qual sexo aluno?: [Femenino || Masculino] \n', function (sexoAl) {
        let sexoAluno = sexoAl;
        entradaDados.question('qual curso do aluno?: \n', function (cursoDoAluno) {
            let cursoAluno = cursoDoAluno
            
            //nome prof
            entradaDados.question('Nome do professor: \n', function (nomeProf) {
                let nome2 = nomeProf;
                entradaDados.question('qual sexo do professor?  [Femenino || Masculino] \n', function (sexoProf) {
                    let sexoProfessor = sexoProf;
                    entradaDados.question('qual a disciplina? \n', function (disciplina) {
                        let disciplinaProfessor = disciplina
                        // entrada das notas 
                        entradaDados.question('Digite a nota 1 : \n', function (nota1) {
                            let valor1 = nota1.replace(',', '.')

                            //nota dois  
                            entradaDados.question('digite a nota 2 : \n', function (nota2) {
                                let valor2 = nota2.replace(',', '.')
                                //nota tres
                                entradaDados.question('digite a nota 3 : \n', function (nota3) {
                                    let valor3 = nota3.replace(',', '.')
                                    //nota 4 
                                    entradaDados.question('digite a nota 4 : \n', function (nota4) {
                                        let valor4 = nota4.replace(',', '.')

                                        mediaAluno = calcularMedia.mediaAluno(valor1, valor2, valor3, valor4)

                                        if (mediaAluno >= 50 && mediaAluno <= 69) {
                                            console.log('O aluno precisa fazer o exame');
                                            entradaDados.question('Digite a nota do exame: \n', function (notaExame) {

                                                let resultado = calcularMedia.exame(mediaAluno, notaExame);

                                                if (resultado <= 59) {
                                                    console.log(`${sexoAluno} ${nomeAluno} foi REPROVADO na disciplina ${disciplina}`);
                                                    console.log(`Curso: ${cursoAluno}`);
                                                    console.log(`${sexoProf} : ${nomeProf}`);
                                                    console.log(`Notas do Aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaExame}`);
                                                    console.log(`Média Final: ${mediaAluno}`);
                                                    console.log(`Média do Exame: ${resultado}`);
                                                } else if (resultado >= 60) {
                                                    console.log(`${sexoAluno} ${nomeAluno} foi APROVADO na disciplina ${disciplina}`);
                                                    console.log(`Curso: ${cursoAluno}`);
                                                    console.log(`${sexoProfessor} : ${nomeProf}`);
                                                    console.log(`Notas do Aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaExame}`);
                                                    console.log(`Média Final: ${mediaAluno}`);
                                                    console.log(`Média do Exame: ${resultado}`);
                                                }
                                            })

                                        }
                                        else if (mediaAluno < 50) {
                                            console.log(`${generoAl} ${nomeAluno} foi REPROVADO na disciplina ${disciplina}`);
                                            console.log(`Curso: ${cursoAluno}`);
                                            console.log(`${generoProf} : ${nomeProf}`);
                                            console.log(`Notas do Aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}`);
                                            console.log(`Média Final: ${mediaAluno}`);
                                        } else if (mediaAluno > 70) {
                                            console.log(`${generoAl} ${nomeAluno} foi APROVADO na disciplina ${disciplina}`);
                                            console.log(`Curso: ${cursoAluno}`);
                                            console.log(`${generoProf} : ${nomeProf}`);
                                            console.log(`Notas do Aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}`);
                                            console.log(`Média Final: ${mediaAluno}`);
                                        } 

                                    })


                                })
                            })
                        })
                    })
                })


            })
        })
    })
})