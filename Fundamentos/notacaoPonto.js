console.log(Math.ceil(6.1))
const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola 2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
const obj4 = new Obj('Ventilador')

console.log(obj1.nome)
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj4.nome)