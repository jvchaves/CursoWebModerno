function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto:preco * 0.10
    }
}

console.log(criarProduto("Joao",100))
