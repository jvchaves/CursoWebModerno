function pontuacao(jogos){
   let record = 0
   let pior = 0
    for(let i = 0; i< jogos.length;i++){
        if(jogos[i] > jogos[i + 1]){
            record++
        }
    }
    return record
}

console.log(pontuacao("10 20 30 40 50"))