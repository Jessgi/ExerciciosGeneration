let A = 2;
let B = 4;
let C = 5;

let soma = A + B;

console.log('A soma de A + B é: ' + soma);

if (soma > C) {
    console.log(soma + '>' + C);
    console.log('A Soma de A + B é Maior que C');
}

else if (soma < C) {
    console.log(soma + '<' + C);
    console.log('A Soma de A + B é manor que C');
}

else{
    console.log(soma + ' = ' + C);
    console.log('A soma de A + B é igual a C');
}