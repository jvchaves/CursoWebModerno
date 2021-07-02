const pessoa = {
    saudacao : 'Bom Dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Aqui acontece um conflito de Parafigmas: Funcional e OO

const falarDePessoa  = pessoa.falar.bind(pessoa) //bind define que sera o THIS
falarDePessoa()