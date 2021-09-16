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

let relatorio = '';

for ( let dado in cliente ) 
{
    if(typeof cliente[dado] === 'object' || typeof cliente[dado] === 'function')
    {
        continue // nao fazer nada -> estrutura padrao JavaScript
    } else {
        relatorio += 
        `
            ${dado} : ${cliente[dado]} 
        `;
    }
}

console.log(relatorio);