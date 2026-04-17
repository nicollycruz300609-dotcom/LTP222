export default class Aluno {

    constructor(nome, curso){
        this.nome= nome
        this.curso= curso
    }
    apresentar() {
        console.log(`Ola, meu nome e ${this.nome} e estou cursando ${this.curso}`)
    }
}