function rand({min = 0,max = 10000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max:50, min:15}
console.log(rand(obj))

function aleatorio([min = 0, max = 1000]){
    if (min > max) [min,max] = [max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(aleatorio([50,40]))