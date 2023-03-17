// post - é inserção de dados get 
// retomar dados 
// delete - apagar dados existentes 
//put - alterar dados inexistentes 

//criar uma api para disponibilizar dados de estado e cidades

/**
 * Express - dependencia para realizar requisições de API pelo protocolo HTTP 
 *      npm install express --save
 * 
 *  Cors - dependencia para gerenciar permissões de requisição da API
 *      npm install cors --save
 * 
 *  Body-Parser - dependencia que gerencia o corpo das resquisições 
 *      npm install body-parser --save
 */

//Import das dependencias do projeto

//Dependencia para criar as requisições de API
const express = require('express');
//Dependencia para gerenciar as permissões da API
const cors = require('cors');
//Dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');
//Import do arquivo modulo (funções)
const estadosCidades = require('./modulo/estados_cidades.js');

//Cria um objeto com as caracteristicas do express
const app = express();

app.use((request, response, next) => {
    //API publica - fica disponivel para utilização de qualquer aplicação
    //API privada - fica disponivel somente para o IP informado poder consumir dados da API
    //Define se a API é publica ou privada
    response.header('Access-Control-Allow-Origin', '*');

    //Permite definir quais metodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Envia para o cors() as regras de permissões
    app.use(cors());

    next();
})

//EndPoints
//async - estabalece um status de aguarde, assim que eu processar te devolvo os dados
//Obs: se não usar o async a requisição é perdida, pois o front acha que a API esta fora do ar

//EndPoint para listar todos os estados
app.get('/estados', cors(), async function (request, response, next) {

    //Chama a função que vai listar todos os estados
    let estados = estadosCidades.getListaDeEstados();

    //Tratamento para validar o sucesso da requisição
    if (estados) {
        response.status(200);
        response.json(estados);
    } else {
        response.status(500);
    }


});

//EndPoint para listar os dados do estado filtrando pela sigla do estado
app.get('/estado/:uf', cors(), async function (request, response, next) {

    let statusCode;
    let dadosEstado = {};

    //Recebe a sigla do estado que sera enviada pela url da requisição
    let siglaEstado = request.params.uf

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400;
        dadosEstado.message = 'Não foi possivel processar, pois os dados de entrada (uf) que foi enviado não corrensponde ao que foi exigido. Confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos.';
    } else {
        //Chama a função para retornar os dados do estado
        let estado = estadosCidades.getDadosEstado(siglaEstado)

        if (estado) {
            statusCode = (200)
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
});
app.get('/capitalEstado/:uf', cors(), async function (request, response, next) {
    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosCapitalEstado = {};

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        dadosCapitalEstado.message = "Não é possível processar a requisição sr";
        statusCode = 400;
    } else {
        //chama a função que filtra o estado pela sigla 
        let capital = estadosCidades.getCapitalEstado(siglaEstado)

        //valida se houve retorno válido da função
        if (capital) {
            statusCode = 200; //Estado encontrado
            dadosCapitalEstado = capital;
        } else {
            statusCode = 404; //Estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosCapitalEstado)
});
app.get('/estadosregiao/:regiao', cors(), async function (request, response, next) {
    let nomeRegiao = request.params.regiao;
    let statusCode;
    let dadosEstadoRegiao = {};

    if (nomeRegiao == '' || nomeRegiao == undefined || !isNaN(nomeRegiao)) {

        statusCode = 400;
    } else {
        //chama a função que filtra o estado pela sigla 
        let jRegiao = estadosCidades.getEstadosRegiao(nomeRegiao)

        //valida se houve retorno válido da função
        if (jRegiao) {
            statusCode = 200; //Estado encontrado
            dadosEstadoRegiao = jRegiao;
        } else {
            statusCode = 404; //Estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosEstadoRegiao)
})
app.get('/capitaispais', cors(), async function (request, response, next) {


    //Chama a função que vai listar todos os estados
    let capitaispais = estadosCidades.getCapitalPais();

    //Tratamento para validar o sucesso da requisição
    if (capitaispais) {
        response.status(200);
        response.json(capitaispais);
    } else {
        response.status(500);
    }


});

app.get('/cidades/:uf', cors(), async function (request, response, next) {
    let statusCode
    let cidades = {}

    let siglaEstado = request.params.uf

    if (siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)) {
        statusCode = 400;
        cidades.message = 'Não foi possivel processar, pois os dados de entrada (uf) que foi enviado não corrensponde ao que foi exigido. Confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos.';
    } else {
        //Chama a função para retornar os dados do estado
        let cidadesEstado = estadosCidades.getCidades(siglaEstado)

        if (cidadesEstado) {
            statusCode = 200
            cidades = cidadesEstado
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(cidades)
});


app.get('/v1/senai/cidades', cors(), async function (request, response, next) {

    /* Existem duas opções para receber variaveis para filtro 
     * parms  - que oermite receber a variavel na estrutura da url criada no endpoint
    (geralmente utilizado para Id pk - chave primaria)
    *****2 opç*******
    query string - per permite uma ou muitas variaveis para realizar filtros avançado
                                                                                      */
    // recebe uma variavel encaminhada via query (string)
    let siglaEstado = request.query.uf
    //let cepEstado = request.query.cep
    //let populacaoEstado = request.query.populacao
    //receber por variaveis query
    let statusCode
    let cidades = {}

    

    if (siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)) {
        statusCode = 400;
        cidades.message = 'Não foi possivel processar, pois os dados de entrada (uf) que foi enviado não corrensponde ao que foi exigido. Confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos.';
    } else {
        //Chama a função para retornar os dados do estado
        let cidadesEstado = estadosCidades.getCidades(siglaEstado)

        if (cidades) {
            statusCode = 200
            cidades = cidadesEstado
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(cidades)
});




//Roda o serviço da API para ficar aguardando requisições
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080.');
})