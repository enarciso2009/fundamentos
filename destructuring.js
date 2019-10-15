// novo recurso 

const pessoa = {
nome: 'Ana',
idade: 5,
endereco: {
    logradouro: 'Rua ABC', 
    numero: 1000
}

}

const { nome, idade } = pessoa // este comando quer dizer tire dentro do objeto pessoa o nome e idade.
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // estou alterando o nome da variavel nome e idade para n e i 
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa // neste caso o atributo não existe porem o js ele aceita 
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep } } = pessoa //estamos lendo dentro de pessoa o endereço e dentro de endereco as informações porem não temos o cep
console.log(logradouro, numero, cep)

