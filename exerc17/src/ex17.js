export default class Intervalo {
    inicio;
    fim;
     constructor(inicio, fim) {
        this.inicio = inicio;
        this.fim = fim;
    }

    contem(numero){
        if (this.inicio <= numero && this.fim >= numero){
            return true
        } else {
            return false
        }

    }
    }