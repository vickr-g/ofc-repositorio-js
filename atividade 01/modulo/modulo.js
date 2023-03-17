/****************************************************************
 * objetivo: arquivo de funcoes para calculos de notas
 * data: 10/02/2023
 * autor: victoria gindre
 * versao: 1.0
 ***************************************************************/

// função para realizar calculos de notas

const mediaAluno = function (nota1, nota2, nota3, nota4, media) {



    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4
    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('Erro: você não digitou um valor')
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('Erro: não pode utilizar texto')
    } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('Digite um valor menor ou igual a 100')
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        console.log('Digite um valor maior que 0 ou igual a 0')
    } else {
        if (media > 70) {
            return media
        } else if (media >= 50 && media <= 69) {
            exame()
            return media
        } else if (media < 50) {
           return media
        }



    }
}

const exame = function (mediaAluno, notaExame) {

    let exame = (parseFloat(mediaAluno) + parseFloat(notaExame)) / 2;

    if (exame >= 60) {

        return exame
    } else if (exame <= 59) {

        return exame
    }
}


const sexoAluno = function (sexoAl) {
    let generoAl = sexoAl

    switch (sexoAl) {

        case 'MASCULINO':
            generoAl = 'O aluno'
            break

        case 'FEMENINO':
            generoAl = 'A aluna'
            break

    }
}

const sexoProfessor = function (sexoProf) {
    let generoProf = sexoProf

    switch (sexoProf) {

        case 'MASCULINO':
            generoProf = 'O Professor'
            break

        case 'FEMENINO':
            generoProf = 'A Professora'
            break

    }
}





module.exports = {
    mediaAluno,
    exame,
    sexoAluno,
    sexoProfessor
}