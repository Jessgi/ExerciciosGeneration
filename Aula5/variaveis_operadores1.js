const readline = require('readline-sync');

function lerNumero(promptText) {
  while (true) {
    let entrada = readline.question(promptText).trim();

    entrada = entrada.replace(',', '.');

    const valor = parseFloat(entrada);

   
    if (!isNaN(valor)) {
      return valor;
    }

    console.log('Entrada inválida. Por favor digite um número (ex: 1000 ou 1000,50).');
  }
}


const salario = lerNumero('Digite o Salário: ');


const abono = lerNumero('Digite o Abono: ');


const novoSalario = salario + abono;

function formatarBRL(numero) {

    return numero.toFixed(2).replace('.', ',');
}

console.log('\n--- Resultado ---');
console.log('Salário: R$', formatarBRL(salario));
console.log('Abono:   R$', formatarBRL(abono));
console.log('Novo Salário: R$', formatarBRL(novoSalario));
