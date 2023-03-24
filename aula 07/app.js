/* fazer a api carregar o json: v1/whatsapp/11974184085/json-das-msg
 * De cada numero de celular:   v1/whatsapp/1199999999/json-das-msg
 * deve-se carregar quando mudar o endPoint igual dos estados-cidades.js
 */

const express = require('express');
//Dependencia para gerenciar as permissões da API
const cors = require('cors');
//Dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');


const contatos = require('./function/function.js')
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
app.get('/v1/whatsapp/contatos/:numero', cors(), async function (request, response, next){
    
    let statusCode
    let contato = {}
    let numero = request.params.numero
    console.log("oi")

    if (numero == '' || numero == undefined ) {
        statusCode = 400;
        contato.message = 'Não foi possivel processar';
    } else {
        
        let contatoFuncao = contatos.getContatos(numero)

        if (contato) {
            statusCode = 200
            contato = contatoFuncao
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(contato)
});


app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080.');
})


//endpoint para carregar as conversas
