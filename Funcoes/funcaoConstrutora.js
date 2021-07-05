function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const palio = new Carro

palio.acelerar()
palio.acelerar()
console.log(palio.getVelocidadeAtual())

const lambo = new Carro(299, 50)

lambo.acelerar()
console.log(lambo.getVelocidadeAtual())

lambo.acelerar()
console.log(lambo.getVelocidadeAtual())

lambo.acelerar()
console.log(lambo.getVelocidadeAtual())
lambo.acelerar()
console.log(lambo.getVelocidadeAtual())
lambo.acelerar()
console.log(lambo.getVelocidadeAtual())
lambo.acelerar()
console.log(lambo.getVelocidadeAtual())
lambo.acelerar()
console.log(lambo.getVelocidadeAtual())