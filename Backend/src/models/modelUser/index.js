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
        
        let nome = request.body.nome;
        let email = request.body.email;
        let senha = request.body.senha;

        banco.query('INSERT INTO user (name,email,password) VALUES (?,?,?)',[nome, email, senha],(err, result, fields) => {
            if(err) return response.json(false);
            return response.json(true);
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

        let id = request.body.id;
        let emailAnterior = request.body.email;
        let name = request.body.data.name;
        let email = request.body.data.email;
        let password = request.body.data.password;

        banco.query(`UPDATE user SET name = ?, email = ?, password = ? WHERE id_user = ? and email`,
        [name,email,password,id,emailAnterior],
        (err, result, fields) => {
            if(err) return response.json(err);
            return response.json(result);    
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
        let id = request.body.id;
        let email = request.body.email;
        banco.query('DELETE FROM user WHERE id_user = ? and email = ?',[id, email],(err, result, fields) => {
            if(err) response.json(false);
            return response.json(true);
        });
    }
}