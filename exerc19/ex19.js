export default class Texto {
    conteudo;
    constructor(conteudo) {
        this.conteudo = conteudo;
    }
    
    repetir(vezes) {
        return this.conteudo.repeat(vezes);
    }
}