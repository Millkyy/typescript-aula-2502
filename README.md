# 📘 TypeScript

Este repositório contém materiais e exemplos das aulas sobre TypeScript realizadas em **25/02/2025** e **07/03/2025**. 

## 🚀 Aula 1: Introdução ao TypeScript (25/02/2025)

### O que é TypeScript?
TypeScript é um **superconjunto do JavaScript** que adiciona **tipagem estática** e outros recursos avançados. Ele melhora a manutenção do código e reduz erros em tempo de desenvolvimento.

### Vantagens do TypeScript
- **Detecção de erros** antes da execução.
- **Melhor suporte** em IDEs e ferramentas.
- **Maior manutenção e escalabilidade** do código.

### Instalação e Configuração
Para começar a usar TypeScript, é necessário instalá-lo e configurá-lo corretamente. Siga os comandos abaixo:

Instale o TypeScript globalmente:
```bash
npm install -g typescript
```
Inicialize um projeto TypeScript:
```bash
tsc --init
```

### Tipos Básicos
TypeScript possui diversos tipos para tornar o código mais seguro e organizado. Aqui estão alguns exemplos:
```typescript
let idade: number = 19;
let nome: string = "Camilly";
let ativo: boolean = true;
let lista: number[] = [1, 2, 3, 4, 5];
```

### Interfaces e Tipos
Interfaces e tipos ajudam a definir melhor as estruturas de objetos e garantir consistência no código:
```typescript
type Pessoa = {
  nome: string;
  idade: number;
};

interface Usuario {
  id: number;
  email: string;
}
```

### Classes e Modificadores de Acesso
O TypeScript também melhora o conceito de classes com modificadores de acesso como `public`, `private` e `protected`:
```typescript
class Animal {
  private nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
  public falar(): void {
    console.log(`${this.nome} faz um som.`);
  }
}
```

---

## 🚀 Aula 2: Evoluindo com TypeScript (07/03/2025)

### Tipos Avançados
Com os tipos avançados, podemos criar regras mais flexíveis para nossas variáveis e funções:
```typescript
type Resultado = "sucesso" | "erro";
let resposta: Resultado = "sucesso"; 
```

### Generics
Generics permitem criar funções e classes reutilizáveis que funcionam com diferentes tipos:
```typescript
function identidade<T>(valor: T): T {
  return valor;
}

console.log(identidade<number>(10));
console.log(identidade<string>("Hello"));
```

### Decorators
Decorators são usados para adicionar funcionalidades extras a classes e seus membros:
```typescript
function logarClasse(constructor: Function) {
  console.log(`Classe criada: ${constructor.name}`);
}

@logarClasse
class Produto {
  constructor(public nome: string) {}
}
```

### Módulos e Namespaces
Módulos ajudam a organizar o código separando funcionalidades em arquivos distintos:
```typescript
export function somar(a: number, b: number): number {
  return a + b;
}
```
Importando:
```typescript
import { somar } from "./meuModulo";
console.log(somar(5, 3));
```

### Boas Práticas e Ferramentas
Para garantir um código limpo e bem estruturado, é recomendado utilizar algumas ferramentas:
- **TSLint** para padronização do código.
- **Prettier** para formatação automática.
- **Configuração do `tsconfig.json`** para projetos robustos.

---

