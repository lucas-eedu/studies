const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediaDosAlunos = [10,7,9,6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

// function exibeNomeNota(nomeDoAluno) {
//     // Includes -> verifica se existe o nome do aluno no nosso array
//     if(listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
//     // IndexOf -> Trás o número o indice fazendo uma pesquisa pelo nomeDoAluno
//         let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
//         return listaDeNotasEAlunos[0][indice] + ' , sua média é ' +  listaDeNotasEAlunos[1][indice];
//     } else {
//         return 'Aluno não está cadastrado';
//     }
// }

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice];
    } else {
        return 'Aluno não está cadastrado';
    }
}

console.log(exibeNomeNota('Foj'));