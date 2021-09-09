// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = '456';
console.log(numero == numeroString); // compara o valor
console.log(numero === numeroString); // compara o valor e o tipo
console.log(numero + numeroString); // juntou os dois numeros concatenados

// Number()
console.log(numero + Number(numeroString));

// String()
console.log(String(numero) + numeroString);

// conversão explícita