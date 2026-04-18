

import operacoes from "./operacoes"

class Operacoes {
    calcular(a, b, operacao) {

        const operacoes = {
            soma: () => a + b,
            subtrai: () => a - b,
            multiplica: () => a * b,
            divide: () => b === 0 ? "Erro: divisão por zero" : a / b
        };

        return operacoes[operacao]
            ? operacoes[operacao]()
            : "Operação inválida";
    }
}