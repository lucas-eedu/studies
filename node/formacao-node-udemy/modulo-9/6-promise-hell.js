function getId() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(5);
      }, 1500);
   });
}

function getEmail(id) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve('email@email.com');
      }, 2000);
   });
}

function sendEmail(body, from) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let error = false;

         if(!error) {
            resolve({time: 6, to: 'lucas@contapelana.com.br'});
         } else {
            reject('Fila cheia!');
         }
      }, 4000);
   });
}


getId().then(id => {
   getEmail(id).then(email => {
      sendEmail('Olá, mundo.', email).then(() => {
         console.log(`Email enviado, para o usuário com id: ${id}`);
      }).catch(err => {
         console.log(`Error: ${err}`);
      });
   });
});