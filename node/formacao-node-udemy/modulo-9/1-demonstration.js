function enviarEmail(corpo, para) {
   setTimeout(() => {
      console.log(`
         Para: ${para}
         ----------------------
         ${corpo}
         ----------------------
         De: Lucas Eduardo
      `);
   }, 8000);
}

console.log('Inicio do envio');
enviarEmail('Oi, seja bem-vindo.', 'lucas01.dev@gmail.com');
console.log('Seu e-mail foi enviado, deve chegar em minutos.');
console.log('Valeu!');