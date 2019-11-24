/**
 * Inicializado da API RESTfull
 * em MVC
 * 
 * Diretorio Pai - /src
 * QnJ1bm9lZGVtYWlz
 */
require('dotenv/config');//Variaveis de ambiente
const express = require('express');
const router = require('./routes');
const key = require('./middleware');
const app = express();

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",  "*");
    res.header('Access-Control-Allow-Methods',  "*");
    next();
});
app.use(key.middleware);
app.use(router);

app.listen(3333);