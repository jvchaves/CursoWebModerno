function compras(trabalho1,trabalho2){
    const tomarSorvete = trabalho1 || trabalho2
    const tv50 = trabalho1 && trabalho2
    const tv32 = trabalho1 != trabalho2
    const manterSaudavel = !tomarSorvete

    return{tomarSorvete,tv50,tv32,manterSaudavel}
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))