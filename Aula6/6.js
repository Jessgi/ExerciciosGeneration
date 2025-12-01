const leia = require('readline-sync');

let nome = leia.question('Nome do colaborador: ');
let cargo = leia.questionInt('Cargo (1 a 6): ');
let salario = leia.questionFloat('Salário: R$ ');

let nomeCargo = '';
let reajuste = 0;

switch (cargo) {
    case 1:
        nomeCargo = 'Gerente';
        reajuste = 0.10;
        break;

    case 2:
        nomeCargo = 'Vendedor';
        reajuste = 0.07;
        break;

    case 3:
        nomeCargo = 'Supervisor';
        reajuste = 0.09;
        break;

    case 4:
        nomeCargo = 'Motorista';
        reajuste = 0.06;
        break;

    case 5:
        nomeCargo = 'Estoquista';
        reajuste = 0.05;
        break;

    case 6:
        nomeCargo = 'Técnico de TI';
        reajuste = 0.08;
        break;

    default:
        console.log('Código de cargo inválido!');
        break;
}

if (reajuste > 0) {
    let novoSalario = salario + (reajuste * salario);

    console.log('\nNome do colaborador: ' + nome);
    console.log('Cargo: ' + nomeCargo);
    console.log('Salário: R$ ' + novoSalario.toFixed(2));
}
