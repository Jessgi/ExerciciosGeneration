import readlineSync from "readline-sync";

const cores = [];

console.log("\nDigite 5 cores:\n");

for (let i = 0; i < 5; i++) {
    const cor = readlineSync.question(`Digite a ${i + 1}ª cor: `);
    cores.push(cor);
}

console.log("\nListar todas as cores:\n");
for (let cor of cores) {
    console.log(cor);
}

const coresOrdenadas = [...cores].sort();

console.log("\nOrdenar as cores:\n");
for (let cor of coresOrdenadas) {
    console.log(cor);
}
