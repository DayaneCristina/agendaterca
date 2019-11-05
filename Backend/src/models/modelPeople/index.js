// @ts-nocheck
/**
 * Model de manipulação do banco de dados
 * Especializado no Contato do Usuario
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
        
        let id = request.query.id;
        return response.json(id);
        
        banco.query(`SELECT 
        sha1(people.id_people), 
        sha1(people.name), 
        sha1(people.nickname), 
        sha1(people.birthday)
        FROM people_user 
            INNER JOIN people ON people.id_people = people_user.id_people  
            INNER JOIN user ON user.id_user = people_user.id_user 
                WHERE email = ? AND password = ?`,[],(err, result, fields) => {
            
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