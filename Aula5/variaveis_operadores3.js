const readline = require('readline-sync');


function lerNumero(texto) {
  while (true) {
    let entrada = readline.question(texto).trim().replace(',', '.');
    const valor = parseFloat(entrada);

    if (!isNaN(valor)) return valor;

    console.log('Valor inválido! Digite um número.');
  }
}

const salarioBruto = lerNumero('Salário Bruto: ');
const adicionalNoturno = lerNumero('Adicional Noturno: ');
const horasExtras = lerNumero('Horas Extras: ');
const descontos = lerNumero('Descontos: ');

const salarioLiquido =
  salarioBruto +
  adicionalNoturno +
  horasExtras * 5 -
  descontos;


function formatar(valor) {
  return valor.toFixed(2).replace('.', ',');
}

console.log('\nSalário Líquido: R$', formatar(salarioLiquido));
