const cliente = {
    nome : 'André',
    idade : 36,
    cpf : '12312312311',
    email : 'andre@email.com',
    fones: ['558599999999', '558598888888'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2021',
    }]
}

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'filha',
    dataNasc: '20/02/2021'
});

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '20/02/2021');

console.log(filhaMaisNova);