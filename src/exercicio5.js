// 3. Manipulação Avançada de Tipos
// Exercício 5
// Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
// Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.
function processarResposta(resposta) {
    if (typeof resposta === "string") {
        console.log("Resposta do servidor: ".concat(resposta));
    }
    else if (typeof resposta === "boolean") {
        console.log("Opera\u00E7\u00E3o foi bem-sucedida? ".concat(resposta ? "Sim" : "Não"));
    }
}
processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);
