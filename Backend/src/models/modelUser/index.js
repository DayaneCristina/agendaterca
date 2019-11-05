// @ts-nocheck
/**
 * Model de manipulação do banco de dados
 * Especializado no Usuario
 * 
 * Diretorio Pai - src/models
 */


//Requerimento de conexão com banco de dados
const banco = require('../../database/index');

module.exports = {

    /**
     * 
     * Metodo de criação, inserindo 
     * os dados no banco de dados 
     * 
     * 
     * @param {*} request 
     * @param {*} response 
     * @return {JSON} 
     */
    async create(request, response){
        return response.json('create');
        banco.query('INSERT INTO <tabela> VALUES (?)',[],(err, result, fields) => {

        });
    },


    /**
     * 
     * Metodo de Atualização de dados 
     * do banco de dados
     * 
     * 
     * @param {*} request 
     * @param {*} response 
     * @return {JSON}
     * 
     */
    async update(request, response){
        return response.json('update');
        banco.query('UPDATE <tabela> SET <coluna> = ? WHERE <condição> = ?',[],(err, result, fields) => {
            
        });
    },

    /**
     * 
     * Metodo de Leitura dos dados 
     * do banco de dados
     * 
     * 
     * @param {*} request 
     * @param {*} response 
     * @return {JSON}
     * 
     */
    async read(request, response){
        
        let email = request.params.email;
        let senha = request.params.senha;
        
        banco.query(`SELECT
        (user.id_user) as ID, 
        (user.name) AS Name, 
        (user.email) AS Email
        FROM  user WHERE email = ? AND password = ?;`,[email,senha],(err, result, fields) => {
            if(err) response.json(false);
            response.json(result);
        });
    },


    /**
     * 
     * Metodo de Delete de dados 
     * do banco de dados
     * 
     * 
     * @param {*} request 
     * @param {*} response 
     * @return {JSON}
     * 
     */
    async delete(request, response){
        return response.json('delete');
        banco.query('DELETE FROM <tabela> WHERE <condição> = ?',[],(err, result, fields) => {
            
        });
    }
}