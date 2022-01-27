function sendEmail(body, from) {
   // (return new Promise) => Equivalente a "Eu prometo que..."
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let error = true;

         if(!error) {
            // Só é possível passar 1 parâmetro dentro das promises
            // Se quiser passar mais dados precisa ser um json {}
            resolve({time: 6, to: 'lucas@contapelana.com.br'}); // Promessa OK!
         } else {
            reject('Fila cheia!'); // Promessa não foi comprida
         }
      }, 4000);
   });
}

// then() só é executado quando a promessa é cumprida
sendEmail('Olá, mundo', 'lucas01.dev@gmail.com').then(data => {
   console.log(`
      Time: ${data.time}s
      --------------------
      To: ${data.to}
   `);
}).catch(err => { // catch() só é executado quando a promessa não é cumprida
   console.log(`Error: ${err}`);
});