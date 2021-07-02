function soma1(a, b, c){
    a = a || 1
    b = b || 2
    c = c || 3
    return a + b + c
}
console.log(soma1())
console.log(soma1(3))

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3),soma2(1, 2, 3), soma2(1,"", 3), soma2(1,2,'csh'))

function soma3( a = 1, b = 2,c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3),soma3(1, 2, 3))