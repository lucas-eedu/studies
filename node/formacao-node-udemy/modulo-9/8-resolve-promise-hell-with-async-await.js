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

async function run() {
   let id = await getId();
   let email = await getEmail(id);
   
   sendEmail('Olá, como vai?', email).then(() => {
      console.log('Email enviado!');
   }).catch(err => {
      console.log(err);
   });
}

run();