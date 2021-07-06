function fatorial(fat){
    let fatorial = 1
    let total = 1

    while (fatorial <= fat) {
        total*=fatorial
        fatorial ++
    }
    return total
}
console.log(fatorial(5))