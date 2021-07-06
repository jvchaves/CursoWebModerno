class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log("Meu Nome É " + this.nome)
    }
}

const pessoa = new Pessoa('Joao')

pessoa.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log("Meu nome é " + nome)
    }
}
const p3 = criarPessoa('João')
p3.falar()