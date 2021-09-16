function Cliente(nome,cpf,email,saldo)
{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

const andre = new Cliente('Andre', '123123123', 'andre@gmail.com', 100);

console.log(andre);