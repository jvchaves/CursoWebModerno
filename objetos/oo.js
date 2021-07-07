//Coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.nome
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 100000,
    proprietario:{
        logradouro: 'Rua Francisco',
        numero:382
    },
    condutores:[{
        nome: 'Junior',
        idade:19
    },{
        nome: 'ana',
        idade: 42
    }]
}
carro.proprietario.logradouro = 'chico bento'
console.log(carro)
delete carro.proprietario
console.log(carro)