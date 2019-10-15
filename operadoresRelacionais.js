// verdadeiro ou falso sempre será este valor verdadeiro ou salso

console.log('Primeiro teste = ' , '1' == 1) // usando == o sistema verifica o valor se é igual indiferente do tipo String ou Number 
console.log('Segundo teste = ', '1' === 1) // usando === o sistema verifica o valor e o tipo neste caso vai dar false porque entre '' é uma string 
console.log('Terceiro teste', '3' != 3) // a pergunta se são diferentes a resposta neste caso será falsa pois os 2 são iguais porem o tipo é diferente 
console.log('Quarto teste', '4' !== 4) // pergunta se são diferentes a resposta neste caso será true pois os numeros são iguais mas os tipos são diferentes ou seja ele verifica tambem o tipo da variavel que esta sendo utilizada 

const d1 = new Date(0)  // Data padráo do js 01/01/1970 00:00:000z
const d2 = new Date(0)

console.log('teste data =',d1 === d2)  // estritamente igual como faz comparação de indereço de memoria nos dois casos será falsos 
console.log('teste data 2 = ', d1 == d2)
console.log('teste data 3 = ', d1.getDate() === d2.getDate())  // neste caso a comparação é um number mesmo tipo e mesmo valor 

console.log('Teste Null = ', undefined == null) // verdadeiro pois os 2 estão em branco 
console.log("teste null2 = ", undefined === null) // estritamente igual são diferentes 
