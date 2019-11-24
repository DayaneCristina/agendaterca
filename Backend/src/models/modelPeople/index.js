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
    async create(request, response) {
        let id_user = request.body.user.id_user;
        let name_people = request.body.people.name_people;
        let nickname_people = request.body.people.nickname_people;
        let birthday_people = request.body.people.birthday_people;
        let email_people = request.body.people.email_people;
        let phone_people = request.body.people.phone_people;
        /*

        -- Primeiro insert 
        insert into people values 
        (?,?,?,?);
        -- segundo insert
        insert into contact values 
        (?,?,?); 
        -- terceiro insert
        insert into people_user values 
        (?,?);

        */
        banco.query(`
        insert into people 
        (name, nickname, birthday, email, phone, id_user) 
        values 
        (?,?,?,?,?,?)`,
            [name_people, nickname_people, birthday_people, email_people, phone_people, id_user],
            (error, result, fields) => {
                if (error) return response.json(error);
                response.json(result);
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
    async update(request, response) {
        let id_user = request.body.user.id_user;
        let id_people = request.body.people.id_people;
        let name_people = request.body.people.name_people;
        let nickname_people = request.body.people.nickname_people;
        let birthday_people = request.body.people.birthday_people;
        let email_people = request.body.people.email_people;
        let phone_people = request.body.people.phone_people;
        banco.query(`
        UPDATE people SET 
            name = ?,
            nickname = ?,
            birthday = ?,
            email = ?,
            phone = ?
                WHERE id_user = ? and id_people = ?`,
            [name_people, nickname_people, birthday_people, email_people, phone_people, id_user, id_people],
            (err, result, fields) => {
                if (err) return response.json(err);
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
    async read(request, response) {

        let email = request.query.email;
        let id = request.query.id;
        banco.query(`SELECT 
        (people.id_people) as ID, 
        (people.name) as Nome, 
        (people.nickname) as Sobrenome,
        DATE_FORMAT(people.birthday, '%Y-%m-%d') as Aniversario,
        (people.email) as Email,
        (people.phone) as Phone
        FROM people 
            INNER JOIN user ON user.id_user = people.id_user 
                WHERE user.email = ? AND people.id_people = ?`, [email, id], (err, people, fields) => {
            if (err) return response.json(err);
            return response.json(people);
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
    async delete(request, response) {
        let id = request.params.people;
        let user = request.params.user;
        banco.query('DELETE FROM people WHERE id_people = ? and id_user = ?', [id, user], (err, result, fields) => {
            if (err) return response.json(false) 
            return response.json(true);
        });
    },


    async listRead(request, response) {

        let email = request.query.email;
        let id = request.query.id;

        banco.query(`SELECT 
        (people.id_people) as ID, 
        (people.name) as Nome, 
        (people.nickname) as Sobrenome
        FROM people 
            INNER JOIN user ON user.id_user = people.id_user 
                WHERE user.email = ? AND user.id_user = ?`, [email, id], (err, result, fields) => {
            if (err) return response.json(false);
            return response.json(result);
        });
    },
}