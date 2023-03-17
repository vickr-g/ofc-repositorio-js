//Array
/********************************************************************
 * Objetivo: utilizar array com codigos e metodos
 * Data: 24/02/2023
 * utor: victoria
 * Versão 1.0
 ********************************************************************/

// [] - represneta um objeto do modelo array 
// {} - representa um objeto do modelo json
// typeoff mostra o modelo de dado
//{} formato json de dados
//[] formato array de dados --- para o js, um array é um objeto

const listaNomes = ['jose', 'maria', 'luiz', 'carlos']

const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Computador', 'Fone', 'Impressora', 'Scanner', 'WebCam']

//JSON - exemplo de JSON com estrutura de array
const listaProdutosJson = {}
/* produtos = {
            [
                { nome : 'Mouse', cor:  'Preto' , quantidade : 50 },
                { nome : 'Monitor', cor:  'Branco' , quantidade : 100}
            ]
        } */



//esse array de cima substitui isso aqui:
/* const nomes1 = 'jose'
const nomes2 = 'maria'
const nomes3 = 'luiz'
const nomes4 = 'carlos'*/


const manipulandoElementos = function () {

    //exibe todos os elementos do array
    console.log(listaNomes)

    //exibe apenas um elemento conforme seu indice
    console.log(listaNomes[0])
    console.log('o nome do usuario é ' + listaNomes[0])

    //verifica o modelo de dados de um elemento array
    console.log(typeof (listaNomes[0]))

    //percorrendo um array usando WHILE
    let cont = 0 //start
    let qtdeItens = listaNomes.length //stop

    console.log('\n----------Exibindo dados do array com while----------\n')
    while (cont < qtdeItens) {
        console.log(`nome: ${listaNomes[cont]}`)
        cont += 1;
    }

    //percorrendo um array usando FOR
    console.log('\n----------Exibindo dados do array com for----------\n')
    let qtdeNomes = listaNomes.length; //stop
    for (let cont = 0; cont < qtdeNomes; cont++)
        //apenas uma saida, não é necessário abrir chaves
        console.log(`Nome: ${listaNomes[cont]}`)


    //percorrendo um array usando FOREACH    
    console.log('\n----------Exibindo dados do array com FOREACH----------\n')
    //for each é um método de um objeto array, que retorna a função de call back
    listaNomes.forEach(function (nomes) {
        console.log(`Nome: ${nomes}`)
    });


    //ADICIONANDO elementos novos no array
    //Push - adiciona elementos no FINAL do array
    listaNomes.push('Alexandre');
    listaNomes.push('Lucas', 'Marcos');
    console.log(listaNomes)

    //Unshift - adiciona elementos no INICIO do array  
    //(ele altera as posições de todos os próximos elementos)                                                  
    listaNomes.unshift('Ana Maria', 'Leonardo');
    console.log(listaNomes)


    //REMOVENDO elementos no array    
    //Pop - remove o ÚLTIMO elemento do array
    listaNomes.pop();
    console.log(listaNomes)

    //Shift - remove o PRIMEIRO elemento do array
    //(reorganiza todos os próximos elementos)
    listaNomes.shift();
    console.log(listaNomes)


};


const filtrandoElementos = function () {

    //Indexof - mostra a posição que o elemento se encontra
    //quando retornar 0 ou outro numero positivo = existe aquele elemento
    //quando retorna -1 = não existe aquele elemento
    //console.log(listaProdutos)
    console.log(listaProdutos.indexOf('Fone de ouvido'))

    if (listaProdutos.indexOf('Fone de ouvido') >= 0)
        console.log('O item pesquisado foi encontrado')
    else
        console.log('O item pesquisado não foi encontrado')


    //slice - permite criar um cópia do array, 
    // podendo selecionar os itens
    const novosProdutos = listaProdutos.slice(0, 3);

    console.log(listaProdutos)
    console.log(novosProdutos)
};


const removerElementos = function (array, nomeItem) {
    let novaLista = array.slice()

    let status;
    let nome = nomeItem;
    let indice = novaLista.indexOf(nome);

    //splice - permtie remover um elemento do array pelo indice

    if (indice >= 0) {
        novaLista.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    if (status)
        return novaLista;
    else
        return status;

};


const listagemProdutos = function () {
    let listProdutosJson = {};

    let listProdutos = [
        { nome: 'Teclado DELL', valor: 200, quantidade: 50 },
        { nome: 'Monitor DELL', valor: 1000, quantidade: 70 },
        { nome: 'Mouse DELL', valor: 300, quantidade: 350 },
    ];

    let listCores = ['Branco', ' Preto', ' Cinza'];
    let listmodeloTeclados = ['Mecânico', ' Semi-mecânico', ' Membrana'];
    let listmodeloMonitores = ['LCD', ' Full-HD', ' 4K', ' OLED'];

    //Adiciona chaves (opções) no Teclado
    listProdutos[0].cores = listCores;
    listProdutos[0].modelo = listmodeloTeclados;

    //Adiciona chaves (opções) no Monitor
    listProdutos[1].cores = listCores;
    listProdutos[1].modelo = listmodeloMonitores;

    //Adiciona chaves (opções) no Mouse
    listProdutos[2].cores = listCores;

    //Adiciona uma chave produtos e coloca toda a estrutura dos produtos dentro dela
    listProdutosJson.produtos = listProdutos;


//REPETIÇÃO
    //retorna todo os dados dos produtos (1º nível dos dados do JSON)
    listProdutosJson.produtos.forEach(function (itemProduto) {
        console.log('\n Nome: ' + itemProduto.nome);
        console.log('Valor: ' + itemProduto.valor);
        console.log('Quantidade: ' + itemProduto.quantidade);

        //validação para tratar quando não existe cores de produto
        if (itemProduto.cores != undefined) {
            //essa linha retorna todas as cores existentes para cada produto    
            itemProduto.cores.forEach(function (dadosCores) {
                console.log('Cores: ' + dadosCores);
            });
        }

        //validação para tratar quando não existe modelos de produto
        if (itemProduto.modelo != undefined) {
            //essa linha retorna todos os modelos existentes para cada produto
            itemProduto.modelo.forEach(function (dadosmodelo) {
                console.log('modelo: ' + dadosmodelo);
            });
        }
    });



    /* console.log('\n- Nome: ' + listProdutosJson.produtos[0].nome);
    console.log('- Valor: ' + listProdutosJson.produtos[0].valor);
    console.log('- Quantidade: ' + listProdutosJson.produtos[0].quantidade);
    console.log('- Cor: ' + listProdutosJson.produtos[0].cores);
    console.log('- modelo: ' + listProdutosJson.produtos[0].modelo + '\n');
    console.log('- Nome: ' + listProdutosJson.produtos[1].nome);
    console.log('- Valor: ' + listProdutosJson.produtos[1].valor);
    console.log('- Quantidade: ' + listProdutosJson.produtos[1].quantidade);
    console.log('- Cor: ' + listProdutosJson.produtos[1].cores);
    console.log('- modelo: ' + listProdutosJson.produtos[1].modelo + '\n');
    console.log('- Nome: ' + listProdutosJson.produtos[2].nome);
    console.log('- Valor: ' + listProdutosJson.produtos[2].valor);
    console.log('- Quantidade: ' + listProdutosJson.produtos[2].quantidade);
    console.log('- Cor: ' + listProdutosJson.produtos[2].cores  + '\n'); */



    //array dentro de Json
    /* listaProdutosJson.produtos = listaProdutos;
    listaProdutosJson.clientes = listaNomes; */

    /*console.log(listaProdutosJson.clientes[1])
     console.log(listaProdutosJson) */
};

listagemProdutos();

/* console.log(removerElementos(listaProdutos, 'Monitor'));
console.log(listaProdutos) */