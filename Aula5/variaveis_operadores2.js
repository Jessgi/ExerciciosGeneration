const readline = require('readline-sync');


function lerNumero(texto) {
  while (true) {
    let entrada = readline.question(texto).trim().replace(',', '.');
    const valor = parseFloat(entrada);

    if (!isNaN(valor)) return valor;

    console.log('Valor inválido! Digite um número.');
  }
}

const nota1 = lerNumero('Nota 1: ');
const nota2 = lerNumero('Nota 2: ');
const nota3 = lerNumero('Nota 3: ');
const nota4 = lerNumero('Nota 4: ');

const media = (nota1 + nota2 + nota3 + nota4) / 4;

function formatar(valor) {
  return valor.toFixed(1).replace('.', ',');
}

console.log('\nMédia final:', formatar(media));
