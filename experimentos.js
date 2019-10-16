// sempre trabalhar com constantes e nunca deixar como global 


let a = 3
 
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando um variavel maluca: sem var e let

abc = 3 // nunca utilize isso no sistema pois isso se torna global 
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste' }
