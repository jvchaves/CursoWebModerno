const notas = [1,3,8,8.8,9,10]

// Sem callback
let notasBaixas = []

for(let i in notas){
    if (notas[i] < 7){
    notasBaixas.push(notas[i])
    } 
}
console.log(notasBaixas)

// com callbacks

notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)

const notaBaixas3 = notas.filter(nota => nota < 10)
console.log(notaBaixas3)