

const [a] = [10] // criando um array com apenas uma posição 
console.log(a)

const [n1, n3, n5, n6 = 0] = [10, 7, 9, 8] // criando um array com varias posições 
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8,8], [9, 6,8]]   // array dentro de outro array
console.log(nota) 