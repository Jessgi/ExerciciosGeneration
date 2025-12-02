const readline = require("readline-sync");

let pares = 0;
let impares = 0;
let numero;

for (let i = 1; i <= 10; i++) {
    numero = readline.questionInt("Digite o " + i + "º número: ");

    if (numero % 2 === 0) {
        pares = pares + 1;
    } else {
        impares = impares + 1;
    }
}

console.log("Total de números pares: " + pares);
console.log("Total de números ímpares: " + impares);
