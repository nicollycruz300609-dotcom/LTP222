import usuario from "./usuario.js";


const usuario1 = new Usuario("Nicolly", "nicolly@email.com");
const usuario2 = new Usuario("heloisa", "heloemail.com");


console.log(usuario1.validarEmail()); 
console.log(usuario2.validarEmail()); 
