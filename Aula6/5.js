const leia = require('readline-sync');

let codigo = leia.questionInt('Código do Produto (1 a 6): ');
let quantidade = leia.questionInt('Quantidade: ');

let produto = '';
let preco = 0;


switch (codigo) {
    case 1:
        produto = 'Cachorro Quente';
        preco = 10;
        break;

    case 2:
        produto = 'X-Salada';
        preco = 15;
        break;

    case 3:
        produto = 'X-Bacon';
        preco = 18;
        break;

    case 4:
        produto = 'Bauru';
        preco = 12;
        break;

    case 5:
        produto = 'Refrigerante';
        preco = 8;
        break;

    case 6:
        produto = 'Suco de laranja';
        preco = 13;
        break;

    default:
        console.log('Código inválido!');
        break;
}

if (preco > 0) {
    let total = quantidade * preco;

    console.log('\nProduto: ' + produto);
    console.log('Valor total: R$ ' + total);
}