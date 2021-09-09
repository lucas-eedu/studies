// == (comparacao implícita)

const numero = 5;
const texto = '5';

console.log(numero === texto);

// typeoff
console.log(typeof numero);
console.log(typeof texto);

// == só compara o valor
// === compara o valor e o tipo de dado (As boas práticas do JavaScript é usar esse aqui)

// ||: Operador “ou”, retorna true caso uma condição seja válida;
// &&: Operador “e”, retorna true somente se todas as condições forem válidas;
// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.