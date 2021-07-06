function carros(carro){
    switch(carro){
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break;
        case 'sedans': case 'motocicletas': case 'camionetes':
            return 'Tem certeza que prefere este modelo?'
            break;
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
            break;
    }
}

console.log(carros('hatch'))
console.log(carros('sedans'))
console.log(carros('motocicletas'))
console.log(carros('camionetes'))
console.log(carros('sedan'))