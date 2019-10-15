// par nome/valor

const saudacao = 'Opa' // contexto léxico 

function exec() {
    const saudacao = 'falaaa' 
    return saudacao 
}

 // objetos são grupos aninhados de pares nome/valor

const Client = {
    nome: "Pedro",
    idade: 32,  
    peso: 80,
    endereco: {
        logradouro: 'Rua do Endereço', mumero: 1500
    }
}  


console.log(saudacao)
console.log(exec())
console.log(Client)



