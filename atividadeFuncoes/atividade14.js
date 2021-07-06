function frutas(fruta){
    switch(fruta){
        case 'maçã':
            console.log("Não vendemos esta fruta aqui")
            break;
        case 'kiwi':
            console.log("Estamos com escassez de kiwis")
            break;
        case 'melancia':
            console.log("Aqui está 3 reais o quilo!")
            break;
        default:
            console.log("Informe uma fruta valida!")
            break;
    }
}
frutas('maçã')
frutas('kiwi')
frutas('melancia')
frutas('kiw')