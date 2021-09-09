// https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript

//var

// var altura = 5;
// var comprimento = 7;

// var area = altura * comprimento;
// console.log(area);

// let forma = 'retângulo';
// let altura = 5;
// let comprimento = 7;

// if (forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area = altura * comprimento / 2;
// }
// console.log(area);
// let area;

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'triângulo') {
    area = altura * comprimento;
} else {
    area = altura * comprimento / 2;
}

console.log(area);