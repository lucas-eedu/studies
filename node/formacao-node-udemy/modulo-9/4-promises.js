function sendEmail(body, from) {
   // (return new Promise) => Equivalente a "Eu prometo que..."
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let error = true;

         if(!error) {
            resolve(); // Promessa OK!
         } else {
            reject(); // Promessa não foi comprida
         }
      }, 4000);
   });
}

// then() só é executado quando a promessa é cumprida
sendEmail('Olá, mundo', 'lucas01.dev@gmail.com').then(() => {
   console.log('Success!');
}).catch(() => { // catch() só é executado quando a promessa não é cumprida
   console.log('Error!');
});