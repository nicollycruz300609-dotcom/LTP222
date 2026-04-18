export default class Bhaskara{
    a;
    b;
    c;
    constructor(a, b, c){
        this.a= a;
        this.b= b;
        this.c= c;
    }

    calcularDelta(a, b, c){
        return (this.b ** 2) - (4 * this.a * this.c);
    }
}