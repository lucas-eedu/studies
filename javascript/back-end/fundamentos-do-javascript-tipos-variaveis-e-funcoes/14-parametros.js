// Parâmetros de função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(10, 20));
console.log(soma(174, 220));
console.log(soma(-10, 20));

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40, "Juliana"));

// É possível definir um valor padrão para um parâmetro
function multiplica(numero1 = 1, numero2 = 2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(5, 6)));