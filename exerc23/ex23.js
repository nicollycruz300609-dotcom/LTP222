export default class Palindromo{
    palavra;
    constructor(palavra){
        this.palavra = palavra;
    }
    ehpaliedromo (){
        for (let i = 0; i < this.palavra.length / 2; i++) {
        if (this.palavra[i] !== this.palavra[this.palavra.length - 1 - i]) {
            return false;
        }
    }
    return true;

    }
}