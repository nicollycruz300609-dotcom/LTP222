export default class Contabancaria{
    constructor(titular){
        this.titular=titular;
        this.saldo= 0;
    }

    depositar(valor){
    this.saldo += valor;

    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo <= valor;
            console.log(`Saque de ${valor} realizado.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}

