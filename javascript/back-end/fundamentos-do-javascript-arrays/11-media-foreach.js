const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// forEach é um método -> callback
notas.forEach( nota => {
    somaDasNotas += nota;
});

// Exemplo ArrowFunction
// notas.forEach( function(nota) {
//     somaDasNotas += nota;
// });

let media = somaDasNotas/notas.length;

console.log(media);