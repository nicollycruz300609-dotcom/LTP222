
export default class numeros{
    a;
    b;
    c;
    constructor(a,b,c){
        this.a= a;
        this.b= b;
        this.c= c;
    }

    maior(a,b,c){
        if(a>b && a>c){
            return a;
        }else if(b>a && b>c){
            return b;
        }else{
            return c;
        }
    }
}