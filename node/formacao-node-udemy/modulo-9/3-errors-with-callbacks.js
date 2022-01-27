function sendEmail(body, from, callback) {
   setTimeout(() => {
      console.log(`
         Para: ${from}
         ----------------------
         ${body}
         ----------------------
         De: Lucas Eduardo
      `);

      const ifError = true;

      if(ifError) {
         callback('O envio falhou!');
      } else {
         callback();
      }
      
   }, 8000);
}

console.log('Inicio do envio');
sendEmail('Oi, seja bem-vindo.', 'lucas01.dev@gmail.com', (error) => {
   if(error == undefined) {
      console.log(`Sucesso!`);
   } else {
      console.log(`Ocorreu um erro: ${error}`);
   }
});