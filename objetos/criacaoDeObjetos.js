//notacao literal
const obj1 = {}
console.log(obj1)
// OBJECT em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 8.99, 0.1)
const p2 = new Produto('Smart Tv', 3599.81, 0.30)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

//Função factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('joao',30000,2)
const f2 = criarFuncionario('Jr',25000,15)
console.log(f1.getSalario(), f2.getSalario())

// objec.create
const filha = Object.create(null)
filha.nome = 'Gu'
console.log(filha.nome)

// Recebendo Jason e tranformando em object

const fromJson = JSON.parse('{"Info":"Sou um JSON"}')
console.log(fromJson.Info)