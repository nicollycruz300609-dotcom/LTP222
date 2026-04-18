
export default class operacoes {
    a;
    b;
    operacoes;
    constructor(a, b, operacoes){
        this.a= a
        this.b= b
        this.operacoes= operacoes
    }
       
    calcular(a, b, operacoes){
        if (operacoes === "soma"){
            return a+b
        } else if(operacoes === "subtrair"){
            return a-b
        } else if (operacoes === "multiplicar"){
            return a*b
        } else if (operacoes=== "dividir"){
           if(b===0){
            return "invalido"
           } 
            
            return a/b

        }

             }




}