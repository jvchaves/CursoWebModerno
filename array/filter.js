const produtos = [
   {nome: 'Notebook', preco: 2499, fragil: true},
   {nome: 'MacBook', preco: 24499, fragil: false},
   {nome: 'Copo Vidro', preco: 9, fragil: true}, 
   {nome: 'Plastico', preco: 8, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 10
}))
const caro = produtos => produtos.preco >=500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))