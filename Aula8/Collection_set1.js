const prompt = require("prompt-sync")();

let numeros = new Set();

while (numeros.size < 10) {
    let valor = Number(prompt(`Digite o ${numeros.size + 1}º número inteiro: `));

    if (!Number.isInteger(valor)) {
        console.log("Digite apenas números inteiros!");
        continue;
    }

    if (numeros.has(valor)) {
        console.log("Valor repetido! Digite outro número.");
    } else {
        numeros.add(valor);
    }
}

console.log("\nListar dados do Set:");
for (let num of numeros) {
    console.log(num);
}