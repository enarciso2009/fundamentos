// neste exemplo o js não se comporta corretamente devaria dar de resultado 
// 2 e 8 e o resulstado foi 10 e 10 
// isto é um problema no js quando usamos a variavel var
const funcs = []

for (var i=0; i<10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// resultado 10 e 10