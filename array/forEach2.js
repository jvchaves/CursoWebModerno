Array.prototype.forEach2 = function(callBack){
    for(let i = 0;i<this.length;i++){
        callBack(this[i],i,this)
    }
}
const aprovados = ['joao','patricia','ju']
aprovados.forEach2(function(e, indice){
    console.log(`${indice + 1} : ${e}`)
})