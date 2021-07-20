const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.5
    },{
        nome: 'JOão',
        nota: 9.5

    },{
        nome: 'Jose',
        nota: 10
    }],
    nome: 'Turma M2',
    alunos: [{
        nome: 'Sila',
        nota: 8.5
    },{
        nome: 'bino',
        nota: 9.5

    },{
        nome: 'alf',
        nota: 10
    }]
}]

const getNotaAlunos = aluno => aluno.nota

const getNotasDaTurma = turmas => turmas.alunos.map(getNotaAlunos)

const nota1 = escola.map(getNotasDaTurma)
console.log(nota1)
Array.prototype.flatMap = function(CallBack){
    return Array.prototype.concat.apply([],this.map(CallBack))
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)