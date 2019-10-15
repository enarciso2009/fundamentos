
// function com o nome rand onde temos 2 atributos min e max com valores setados 
function rand({ min = 0, max = 1000}) {
const valor = Math.random() * (max - min) + min
return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))

console.log(rand({ min: 955 }))
console.log(rand({}))

