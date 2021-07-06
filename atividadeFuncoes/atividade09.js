function escola(nota){
    if (nota < 38){
        return 'REPROVADO'
    }else if(( (Math.ceil(nota/5)*5) - nota) < 3){
        return this.nota = (Math.ceil(nota/5)*5)
    }else if(nota >= 38){
        return this.nota = (Math.ceil(nota/5)*5)
    }
}

console.log(escola(81))