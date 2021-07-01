const pessoa = {
    nome : 'Pedro',
    idade : 10,
    bemhumorada : false,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1200
    }
}

const {nome,idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome,bemhumorada)
const {endereco:{logradouro, cep, numero}} = pessoa
console.log(logradouro,numero,cep)