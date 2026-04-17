import Produto from "./ex.js";

const produto = new Produto("Produto Exemplo", 100);

produto.aplicarDesconto(20);

console.log("Novo preço:", produto.preco);