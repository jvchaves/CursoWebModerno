const alunos = [
{ nome: 'Joao', nota: 10, bolsista: true },
{ nome: 'Pedro', nota: 8.0, bolsista: false },
{ nome: 'Nathan', nota: 10, bolsista: true },
{ nome: 'Chico', nota: 6.0, bolsista: false },
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
})