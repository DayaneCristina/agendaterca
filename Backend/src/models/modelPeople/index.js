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
        
        let email = request.query.email;
        let id = request.query.id;

        banco.query(`SELECT 
        (people.id_people) as ID, 
        (people.name) as Nome, 
        (people.nickname) as Sobrenome
        FROM people_user 
            INNER JOIN people ON people.id_people = people_user.id_people  
            INNER JOIN user ON user.id_user = people_user.id_user 
                WHERE user.email = ? AND user.id_user = ?`,[email,id],(err, result, fields) => {
                    if(err) return response.json(false);
                    return response.json(result);
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