/**
 * Conexão com banco de dados
 * 
 * Diretorio Pai - src/database
 */

//Requisição de depêndencia (MYSQL)
const mysql = require('mysql');

const config = require('../config');
/**
 * Criando a conexâo do banco de dados
 */
const Banco = mysql.createConnection({
    host: config.Database.host,
    port: config.Database.port,
    user: config.Database.user,
    password: config.Database.pass,
    database: config.Database.data
});

/**
 * Conectando ao banco
 */
Banco.connect((err) => {
    if(err) return console.log(err);
    console.log('Conectado ao Banco');
});

module.exports = Banco;