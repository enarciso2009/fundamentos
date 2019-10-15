// math.ceil serve para arredondar o numero colocamos 6.1 o resultado foi = 7

console.log(Math.ceil(6.1))

// muito facil criar um objeto no js funciona como uma classe 
const obj1 = {}
obj1.nome = 'bola'

// usando uma variavel do objeto 
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome  // this serve para deixar publico a variavel nome 
    this.exec = function() {
        console.log('exec...')
    }
}

const obj2 = new Obj("Cadeira") // o nome vai receber cadeira quanto utilizado o this ele recebe informações fora do bloco
const obj3 = new Obj("mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()