function jurosSimples(inicial, juros, tempo){
    let total = 0
    for(let i = 0;i<tempo;i++){
        total = (inicial*juros)
    }
    return (inicial += total)
}

function jurosCompostos(inicial, juros, tempo){
    let total = 0
    for(let i = 0;i<tempo;i++){
        total = (inicial*juros)
        inicial += total
    }
    return inicial
}

console.log(jurosSimples(1000,0.1,10))
console.log(jurosCompostos(1000,0.1,10))