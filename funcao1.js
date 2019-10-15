//funcao sem retorno 
// a e b são variavies porem não temos que colocar se eh var ou let const
function imprimirSoma(a, b) {
    console.log(a + b)
} 

imprimirSoma(2, 3)
imprimirSoma(2)

//funcao com retorno 

// muito interessante o return armazena o calculo que que foi passado no console fora do bloco

function soma(a, b = 0) {

    return a + b
}

console.log(soma(2, 3))
console.log(3)