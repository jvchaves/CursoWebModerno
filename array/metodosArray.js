const pilotos = ['Vettel', 'Alonso', 'João','Massa']

pilotos.pop()
console.log(pilotos)

pilotos.push('Versta')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Xiblema')
console.log(pilotos)

pilotos.splice(2,0,'Chaves','Massa')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //Gera um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
console.log(pilotos[0])