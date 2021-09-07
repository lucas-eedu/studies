console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destino possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3) {

    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break; //Forma de deminuir tempo de computacao da aplicao -> se o if for resolvido ele interrompe a execucao e sai do loop
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
}else {
    console.log("Desculpe, tivemos um erro!");
}

for(let i = 0; i < 3; i++) {

    if(listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break; //Forma de deminuir tempo de computacao da aplicao -> se o if for resolvido ele interrompe a execucao e sai do loop
    }
    
}