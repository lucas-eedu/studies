const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

// Funcao -> Configurando aplicativo
module.exports = () => {
    // Criando a variavel app
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Configurando variavel app usando o consign module
    consign()
        .include('controllers')
        .into(app)
    
    // Retornando app
    return app;
}