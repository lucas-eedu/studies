let user1 = {
   nome: 'Lucas',
   empresa: 'Empresa1'
}

let user2 = {
   nome: 'Pedro',
   empresa: 'Empresa2'
}

let user3 = {
   nome: 'Leticia',
   empresa: 'Empresa3'
}

var users = [user1, user2, user3];

var findUser = users.find(user => user.nome == 'Pedro');

console.log(findUser);