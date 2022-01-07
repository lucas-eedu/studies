const nome = 'lucas';
const cpf = '000.000.000-99';
let cnpjs = {
   cnpjprincipal: '000.0000/000.000',
   cnpjsecundario: '000.0000/000.000'
}

const jsonUser = {
   nome,
   cpf,
   // Ex: Juntando todos os campos do objeto cnpjs
   ...cnpjs
}

console.log(jsonUser);