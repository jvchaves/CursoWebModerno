let aprovados = new Array('Bia','Joao','Ana')
console.log(aprovados)

aprovados = ['Bia','Joao','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Chaves'
aprovados.push('Catarina')

console.log(aprovados.length)

aprovados[20] = 'Xablau'

console.log(aprovados)
aprovados.sort()
console.log(aprovados)
delete aprovados[0]
console.log(aprovados)