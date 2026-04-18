
export default class usuario {
    nome;
    email;

    constructor(nome,email){
        this.nome
        this.email
    }

     validarEmail(email){
        if(this.email.includes("@") && this.email.includes(".")){
            return "é valido"

       } else { 
        return "não é valido"

            }
     }

}