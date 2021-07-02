const notas = [6.7, 7.8, 8.4, 4.8, 7.7]

for(let i in notas){
    console.log(i, notas[i])
}
const pessoa = {
    nome : 'João',
    sobrenome : 'Victor',
    idade : 21,
    peso : 90
}

for(let atributos in pessoa){
    console.log(atributos + " = " + pessoa[atributos])
}