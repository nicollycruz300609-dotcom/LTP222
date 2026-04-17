export default class Pessoa {
  constructor(nome, horario) {
    this.nome = nome;
    this.horario = horario; // número de 0 a 23
  }

  saudar() {
    if (this.horario >= 5 && this.horario < 12) {
      return `Bom dia, ${this.nome}!`;
    } else if (this.horario >= 12 && this.horario < 18) {
      return `Boa tarde, ${this.nome}!`;
    } else {
      return `Boa noite, ${this.nome}!`;
    }
  }
}