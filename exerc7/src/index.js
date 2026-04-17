import calculadora from './ex7.js'

const calc1= new calculadora(9, 9)

console.log(`soma: ${calc1.somar() }`);

console.log(`menos: ${calc1.subtrair() }`);

console.log(`multiplo: ${calc1.multiplicar() }`);

console.log(`divisao: ${calc1.dividir() }`);