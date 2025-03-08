// 1. Interfaces e Tipagem Avançada
// Exercício 1
// Crie uma interface chamada Carro, que contenha as seguintes propriedades:
// marca (string)
// modelo (string)
// ano (number)
// motor (opcional, string)
// Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.


interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
    motor: "1.5 Turbo",
};

console.log("Dados do meu carro: ", meuCarro);

