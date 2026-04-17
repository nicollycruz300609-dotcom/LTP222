export default class Aluno{
    nome
    constructor(nomeAluno){
        this.Aluno=nomeAluno
    }
    calcularMedia(nota1, nota2, nota3 ){
        return (nota1 + nota2 + nota3) /3
    }
}