function verificaTriangulo(x, y, z){
    if (x === y && x === z) {
        return console.log("Triangulo Equilátero")
    }else if(x === y && x !== z || y == z && y != x || z == x && z != y){
        return console.log("Triangulo Isósceles")
    }else if(x != y && x != z && z != y){
        return console.log("Triangulo Escaleno")
    }
}
verificaTriangulo(5,5,5)
verificaTriangulo(5,3,2)
verificaTriangulo(0,0,1)
verificaTriangulo(0,1,0)
verificaTriangulo(0,1,1)
verificaTriangulo(1,0,0)
verificaTriangulo(1,0,1)
verificaTriangulo(1,1,0)