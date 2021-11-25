// Import express
const express = require('express');
// Initialize express
const app = express();

// Simple Routes
app.get('/', function(req, res) {
  res.send('Bem-vindo!'); 
});

app.get('/equipe', function(req, res) {
   res.send('Veja a nossa equipe:'); 
});

app.get('/equipe/lucas', function(req, res) {
   res.send('Olá, me chamo Lucas!'); 
});

// Routes with Parameters
app.get('/ola/:nome', function(req, res) {
   var nome = req.params.nome;
   
   res.send('<h1> Oi ' + nome + '</h1>');
});

app.get('/ola/:nome/:empresa', function(req, res) {
   var nome = req.params.nome;
   var empresa = req.params.empresa;

   res.send('<h1> Oi ' + nome + ' da ' + empresa + '</h1>');
});

// Route with non-mandatory(Não obrigatório) Parameter
app.get('/blog/:artigo?', function(req, res) {
   var artigo = req.params.artigo;

   if(artigo) {
      res.send('<h2>Artigo: ' + artigo + '</h2>');
   } else {
      res.send('Bem-vindo ao meu blog!'); 
   }
});

// Route with Query Parameters
app.get('/canal/youtube', function(req, res) {
   var canal = req.query['canal'];

   if (canal) {
      res.send(canal);
   } else {
      res.send('Nenhum canal fornecido!');
   }
});

// Building Server
app.listen(8000, function (error) {
   if (error) {
      console.log('Ocorreu um erro!');
   } else{
      console.log('Servidor inicializado com sucesso!');
   }
});