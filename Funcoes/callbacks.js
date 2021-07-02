const fabricantes = ["HONDA","YAMAHA","KTM","GASGAS"]

function imprimir(nome, indice){
    console.log(indice+1 + ". " + nome )
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a)
})