// muito legal ele ja tras separado cada resposta por objeto 

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const compraTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário
return {comprarSorvete, compraTv50, comprarTv32, manterSaudavel}  // criamos o objeto com os atributos 

}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, false))
console.log(compras(false, false))




