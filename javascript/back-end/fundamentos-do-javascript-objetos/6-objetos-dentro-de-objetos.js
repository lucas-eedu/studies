const cliente = {
    nome : 'André',
    idade : 36,
    cpf : '12312312311',
    email : 'andre@email.com',
    fones: ['558599999999', '558598888888'],
}

cliente.dependentes = {
    nome: 'Lucas',
    parentesco: 'Filho',
    dataNascimento: '20/03/2011'
}

console.log(cliente);

cliente.dependentes.nome = 'Lucas Eduardo';

console.log(cliente);