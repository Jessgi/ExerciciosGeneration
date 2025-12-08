const prompt = require("prompt-sync")();

class Queue {
    constructor() {
        this.items = [];
    }


    enqueue(element) {
        this.items.push(element);
    }


    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }


    print() {
        if (this.isEmpty()) {
            console.log("A fila está vazia!");
        } else {
            console.log("\nClientes na fila:");
            this.items.forEach((cliente, index) => {
                console.log(`${index + 1} - ${cliente}`);
            });
        }
    }

 
    isEmpty() {
        return this.items.length === 0;
    }
}


const fila = new Queue();
let opcao;

do {
    console.log("\n========== MENU ==========");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar Clientes da Fila");
    console.log("3 - Chamar Cliente da Fila");
    console.log("0 - Sair");
    console.log("==========================");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            const nome = prompt("Digite o nome do Cliente: ");
            fila.enqueue(nome);
            console.log(`Cliente '${nome}' adicionado à fila.`);
            break;

        case "2":
            fila.print();
            break;

        case "3":
            const chamado = fila.dequeue();
            if (chamado === null) {
                console.log("A fila está vazia! Ninguém para chamar.");
            } else {
                console.log(`Cliente chamado: ${chamado}`);
            }
            break;

        case "0":
            console.log("Programa finalizado.");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }

} while (opcao !== "0");
