const readline = require("readline-sync");

let menor21 = 0;
let maior50 = 0;

let idade = parseInt(readline.question("Digite uma idade: "));

while (idade >= 0) {

    if (idade < 21) {
        menor21 = menor21 + 1;
    }

    if (idade > 50) {
        maior50 = maior50 + 1;
    }

    idade = parseInt(readline.question("Digite uma idade: "));
}

console.log("Total de pessoas menores de 21 anos: " + menor21);
console.log("Total de pessoas maiores de 50 anos: " + maior50);
