/**
 * Conexão com banco de dados
 * 
 * Diretorio Pai - src/database
 */

//Requisição de depêndencia (MYSQL)
const mysql = require('mysql');

/**
 * Criando a conexâo do banco de dados
 */
// @ts-ignore
const Banco = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA
});

/**
 * Conectando ao banco
 */
Banco.connect((err) => {
    if(err) return console.log(err);
    console.log('Conectado ao Banco');
});

module.exports = Banco;