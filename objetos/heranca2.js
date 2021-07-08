const avo = {attr1 :'A'}
const pai = {__proto__:avo, attr2:'B'}
const filho = {__proto__:pai,attr3:'C'}
console.log(filho.attr1)

const carro = {
    velAtual:0,
    velMax:200,
    aceleramais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual+= delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} KM/h de ${this.velMax} KM/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 450,
}
const volvo = {
    modelo: 'V40',
    velMax: 180,
    status(){
        return `${this.modelo} : ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleramais(300)
ferrari.aceleramais(500)

console.log(ferrari.status())
console.log(volvo.status())