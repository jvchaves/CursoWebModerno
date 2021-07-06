function diaUtil(dia){
    switch(dia){
        case 1: case 7:
            return console.log('FIM DE SEMANA')
            break;
        case 2: case 3: case 4: case 5: case 6:
            return console.log('Dia Util')
            break;
        default:
        return console.log('Informe um dia Valido')
        break;
    }
}
diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)