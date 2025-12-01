let numero = -3;

console.log('O número digitado foi: ' + número);

let parOuImpar;

if (numero % 2 === 0) {
    parOuImpar = 'par';
} else{
    parOuImpar = 'impar';
}

let posOuNeg;
if (numero >= 0) {
    posOuNeg = 'positivo';
} else {
    posOuNeg = 'negativo';
}

console.log('O numero ${numero} é ${parOuImpar} e ${posOuneg}!');
