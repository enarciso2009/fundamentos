// usando a variavel let o comando que esta no bloco é executado corretamente



const funcs = []

for (let i =0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

