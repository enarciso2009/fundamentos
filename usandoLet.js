// no caso abaixo sempre vai dar preferencia para o que esta dentro do bloco


var numero = 1
{

    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

