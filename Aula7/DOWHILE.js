const readline = require('readline-sync');

let numero;
let soma = 0;

do {
    numero = Number(readline.question("Digite um numero: "));

    if (numero > 0) {
        soma = soma + numero;
    }

} while (numero !== 0);

console.log("A soma dos numeros positivos e: " + soma);
