const ferrari = {
    modelo: 'f40',
    velMax: 325
}

const volvo = {
    modelo: 'v40',
    velmax: 180
}
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)