Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if (nota.entre(9,10)){
        console.log("Quadro de Honra")
    }else if (nota.entre(7,8.99)){
        console.log("APROVADO")
    }else if (nota.entre(4,6.99)){
        console.log('RECUPERAÇÃO')
    }else if(nota.entre(0,3.99)){
        console.log("Reprovado")
    }else{
        console.log("NOTA INVALIDA")
    }
    console.log("FIM")
}


imprimirResultado(10)
imprimirResultado(110)
imprimirResultado(2.9)