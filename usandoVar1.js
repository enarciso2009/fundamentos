
// criamos uma variavel dentro de um bloco esta variavel pode ser lida dentro e fora do bloco

{
    {
        {
            {
                var sera = "sera?"
            }
        }
    }
}


 
console.log(sera)

// criamos uma variavel dentro de uma função ela somente poderá ser lida dentro da funcão 

function teste() {
    var local = 123
    console.log(local)
}

// quando chamado a variavel esta fora da funçõa ela apresenta erro de não esta definida 

teste()
console.log(local)