/**
 * Inicializado da API RESTfull
 * em MVC
 * 
 * Diretorio Pai - /src
 */
const express = require('express');
const router = require('./routes');
const key = require('./middleware');

const app = express();

app.use(express.json());
app.use(key.middleware);
app.use(router);

app.listen(3333);