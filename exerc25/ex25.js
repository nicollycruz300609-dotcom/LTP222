
export default class fatorial{
    numero
    constructor(numero) {
        this.numero= numero
        
    }
    calcularFatorial() {
        let fatorial = 1
        for (let i = 1; i <= this.numero; i++) {
            fatorial *= i
        }
        return fatorial
    }
}