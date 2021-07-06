function bissexto(ano){
    if (ano % 400 == 0 || ano %4 == 0 && ano %100 != 0){
        return  `O ano ${ano} é Bissexto!`
    }else{
        return  `O ano ${ano} não é Bissexto!`
    }
}
console.log(bissexto(1999))
console.log(bissexto(2000))
console.log(bissexto(2011))