const prompt = require("prompt-sync")();


class Stack {
    constructor() {
        this.items = [];
    }

   
    push(element) {
        this.items.push(element);
    }


    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    
    print() {
        if (this.isEmpty()) {
            console.log("A pilha está vazia!");
        } else {
            console.log("\nLivros na pilha:");
            // Mostrar do topo para baixo
            for (let i = this.items.length - 1; i >= 0; i--) {
                console.log(`${this.items.length - i} - ${this.items[i]}`);
            }
        }
    }

   
    isEmpty() {
        return this.items.length === 0;
    }
}


const pilha = new Stack();
let opcao;

do {
    console.log("\n========== MENU ==========");
    console.log("1 - Adicionar Livro na Pilha");
    console.log("2 - Listar Livros da Pilha");
    console.log("3 - Retirar Livro da Pilha");
    console.log("0 - Sair");
    console.log("==========================");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            const livro = prompt("Digite o nome do livro: ");
            pilha.push(livro);
            console.log(`Livro '${livro}' adicionado à pilha.`);
            break;

        case "2":
            pilha.print();
            break;

        case "3":
            const retirado = pilha.pop();
            if (retirado === null) {
                console.log("A pilha está vazia! Nenhum livro para retirar.");
            } else {
                console.log(`Livro retirado: ${retirado}`);
            }
            break;

        case "0":
            console.log("Programa finalizado.");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }

} while (opcao !== "0");
