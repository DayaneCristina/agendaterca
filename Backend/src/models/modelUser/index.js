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
        console.log(email+senha)
        return response.json('read');
        
        banco.query(`SELECT <dados> FROM <tabela> WHERE <condição> = ?`,[],(err, result, fields) => {
            
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