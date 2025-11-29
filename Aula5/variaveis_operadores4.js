const readline = require('readline-sync');


function lerNumero(texto) {
  while (true) {
    let valor = readline.question(texto).trim().replace(',', '.');
    valor = parseFloat(valor);

    if (!isNaN(valor)) return valor;

    console.log("Valor inválido! Digite um número.");
  }
}

const n1 = lerNumero("numero1: ");
const n2 = lerNumero("numero2: ");
const n3 = lerNumero("numero3: ");
const n4 = lerNumero("numero4: ");

const diferenca = (n1 * n2) - (n3 * n4);

function formatar(num) {
  return num.toFixed(1).replace('.', ',');
}

console.log("\nDiferença:", formatar(diferenca));
