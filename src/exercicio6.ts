// Exercício 6
// Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
// Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.

type Estudante = {
    nome: string;
    curso: string;
};

type Trabalhador = {
    empresa: string;
    cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Camilly",
    curso: "Engenharia de Software",
    empresa: "FIAP",
    cargo: "Estagiaria de TI"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);