// usando o array 

function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // o que este comando esta fazendo é invertendo o (min max) para (max min)
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // difimimos um valor de min e max
console.log(rand([992])) // assume apenas o valor min 
console.log(rand([, 10])) // assume apenas o valor max 
console.log(rand([])) // vazio ele assume aleatorio min e max

