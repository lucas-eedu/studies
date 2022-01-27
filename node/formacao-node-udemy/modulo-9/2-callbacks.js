function sendEmail(body, from, callback) {
   setTimeout(() => {
      console.log(`
         Para: ${from}
         ----------------------
         ${body}
         ----------------------
         De: Lucas Eduardo
      `);
      callback();
   }, 8000);
}

function sendEmailWithCallParams(body, from, callback) {
   setTimeout(() => {
      console.log(`
         Para: ${from}
         ----------------------
         ${body}
         ----------------------
         De: Lucas Eduardo
      `);
      callback("success", 5, '8s');
   }, 8000);
}

console.log('Inicio do envio');
// sendEmail('Oi, seja bem-vindo.', 'lucas01.dev@gmail.com', () => {
//    console.log('Olá, isso é um callback e ele acaba de ser executado!');
//    console.log('Seu e-mail foi enviado, deve chegar em minutos.');
//    console.log('Valeu!');
// });

sendEmailWithCallParams('Oi, seja bem-vindo.', 'lucas@contapelana.com.br', (status, amount, time) => {
   console.log(`
      De: ${status}
      -------------------
      Qtd: ${amount}
      -------------------
      Tempo de envio: ${time}
   `);
});