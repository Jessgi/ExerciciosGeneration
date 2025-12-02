const readline = require('readline-sync');

let primeiro = Number(readline.question("Digite o primeiro número do intervalo: "));
let ultimo = Number(readline.question("Digite o último número do intervalo: "));

if (primeiro >= ultimo) {
    console.log("Intervalo inválido!");
} else {
    console.log("No Intervalo entre " + primeiro + " e " + ultimo + ":");

    for (let i = primeiro; i <= ultimo; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " é múltiplo de 3 e 5");
        }
    }
}