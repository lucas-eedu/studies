function getUsers() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve([
            {name: 'Victor', lang: 'JS'},
            {name: 'Lucas', lang: 'PHP'},
            {name: 'Daniel', lang: '.NET'},
         ]);
      }, 2000);
   });
}

async function primary() {
   let users = await getUsers();
   console.log(users);
}

primary();

// Await: espera a promise terminar
// let users = await getUsers();