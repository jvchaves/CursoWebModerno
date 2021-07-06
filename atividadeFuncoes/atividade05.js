function conversor(valor){
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'},{minimumFractionDigits: 2})
}

console.log(conversor(0.30000000000000004).replace('.',','))