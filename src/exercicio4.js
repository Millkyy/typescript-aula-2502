// Exercício 4
// Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
// Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).
var UsuarioRepositorio = /** @class */ (function () {
    function UsuarioRepositorio() {
        this.usuarios = [];
    }
    UsuarioRepositorio.prototype.salvar = function (dado) {
        this.usuarios.push(dado);
    };
    UsuarioRepositorio.prototype.obterTodos = function () {
        return this.usuarios;
    };
    return UsuarioRepositorio;
}());
var repo = new UsuarioRepositorio();
repo.salvar({ nome: "Milly", email: "milly@email.com" });
repo.salvar({ nome: "Nikolas", email: "nikolas@email.com" });
console.log("Lista de usuários:", repo.obterTodos());
