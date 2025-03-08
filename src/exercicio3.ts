// 2. Generics
// Exercício 3
// Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
// Teste a função com um array de números e um array de strings.

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

const str = ["a", "b", "c"];
const num = [1, 2, 3];

console.log(inverterArray(str));
console.log(inverterArray(num));