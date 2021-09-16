const cliente = {
    nome : 'André',
    idade : 36,
    cpf : '12312312311',
    email : 'andre@email.com',
    fones: ['558599999999', '558598888888'],
    dependentes: [
        {
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '20/03/2021',
        },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '20/02/2021'
        }
    ],
	saldo: 100,
	depositar: function(valor) {
		this.saldo += valor;
	}
}

// Metodo -> Object.keys retorna um array com todas as chaves de um objeto
// const propsClientes = Object.keys(cliente);

// console.log(propsClientes);

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida parta ${obj.nome}`);
    }
}
console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);