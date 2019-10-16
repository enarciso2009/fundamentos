// mecanismo de tratamento de erro
function tratarErroELancar(Erro) { 
// throw new Error('...')
// throw 10
// throw true
// throw 'mensagem'
 throw {
    nome: Erro.name,
    msg: Erro.message,
    date: new Date
}
}

function imprimirNomeGritando(obj) {
    try{
    console.log(obj.nome.toUpperCase() + '!!!') 
} catch (e) {
    tratarErroELancar(e)
} finally {
    console.log('final')
}
}
const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)