const contatosJson = require('../contatos.js' )

function getContatos(contatos) {
    let arrayContatos = contatos
    let contatoArray = []
    let contatosJSon = false
    

    contatosJson['whats-users'].forEach(function (users) {
        if(contatos == users.number){
            users.contacts.forEach(function(contacts){ //cada contato do user esta indo pro array
                contatoArray.push(contacts)
                contatosJSon =  true
            })
        }
    })
      if(contatosJSon == false){
          return contatosJSon 
          }else{
              return contatoArray

          }
      }
      const getInfoUsuarios = function (number) {
        let numeroTelefone = number
        let dadosUsuario = {}
        let status = false
    
        contatosArquivo.contatos['whats-users'].forEach(function (user){
    
            if(user.number == numeroTelefone){
                dadosUsuario.image = user['profile-image']
                dadosUsuario.name = user.account
                dadosUsuario.nickname = user.nickname
                
                status = true
            }
    
        })
    
        if(status == true){
            return dadosUsuario
        } else {
            return status
        }
    
    }
        

module.exports = {getContatos}
    
    
    
    
    


