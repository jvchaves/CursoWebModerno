const carrinho = [
'{ \"nome\": \"Borracha\", \"preco\": 3.45 }',
'{ \"nome\": \"Caderno\", \"preco\": 18.75}',
]
const paraObj = json => JSON.parse(json)
const resultado = paraObj(carrinho).map(function(e){
    return e.preco
})
console.log(paraObj(resultado))
//const precos = carrinho.map(function(e){
  //  return e
//})

//console.log(precos)