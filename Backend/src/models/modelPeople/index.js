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
        let contacts = request.body.people.contacts_people;
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
        //AutoInclemente do usuario 
        banco.query(`SELECT max(people.id_people) + 1 as ID FROM people INNER JOIN user`, [], (err, result) => {
            let id_people = result[0].ID;
            //INSERT DO CONTATO            
            banco.query(`insert into people (id_people, name, nickname, birthday) 
            values (?,?,?,?)`, [id_people, name_people, nickname_people, birthday_people], (err, result, fields) => {
                //VERIFICANDO SE OCORREU ALGUM ERRO
                if (err) return response.json({ mensagem: 'Erro ao cadastrar o contato.' });
                //Insert de todo objeto de contato
                contacts.map((contact) => {
                    //INSERT DO NUMERO DO CONTATO CADASTRADO
                    banco.query(`insert into contact (contact, id_tipy) 
                    values (?,?)`, [contact.contact, contact.type], (err, result, fields) => {
                        //VERIFICANDO SE OCORREU ALGUM ERRO
                        if (err) return response.json({ mensagem: 'Erro ao cadastrar os numeros do contato.' });
                        banco.query(`SELECT id_contact as ID FROM contact`,[],(err, result) => {
                            var id_contact = result[0].ID;
                            banco.query(`insert into contact_people (id_contact, id_people) values (?,?)`,[id_contact, id_people],(err, result) => {
                                if (err) return response.json({ mensagem: 'Erro ao vincular os numeros do contato.' });
                            });
                        })
                    });
                });
                //INSERT VINCULANDO CONTATO COM O USUARIO  
                banco.query(`insert into people_user (id_people, id_user) values (?,?)`, [id_people, id_user], (err, result, fields) => {
                    //VERIFICANDO SE OCORREU ALGUM ERRO
                    if (err) return response.json({ mensagem: 'Erro ao vincular o contato com o usuario.' });
                    return response.json({ mensagem: 'Cadastrado com sucesso!' });
                });
            });
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
        return response.json('update');
        banco.query('UPDATE <tabela> SET <coluna> = ? WHERE <condição> = ?', [], (err, result, fields) => {

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
        let resultado = [];
        banco.query(`SELECT 
        (people.id_people) as ID, 
        (people.name) as Nome, 
        (people.nickname) as Sobrenome,
        DATE_FORMAT(people.birthday, '%Y-%m-%d') as Aniversario
        FROM people_user 
            INNER JOIN people ON people.id_people = people_user.id_people  
            INNER JOIN user ON user.id_user = people_user.id_user 
                WHERE user.email = ? AND people.id_people = ?`, [email, id], (err, people, fields) => {
            if (err) return response.json(false);
            banco.query(`SELECT 	
            contact.id_contact,
            contact.contact,
            tipy.name
                FROM contact_people 
                    INNER JOIN contact ON contact_people.id_contact = contact.id_contact 
                    INNER JOIN people ON contact_people.id_people = people.id_people
                    INNER JOIN tipy ON tipy.id_tipy = contact.id_tipy
                        WHERE contact_people.id_people = ?`,[id],(err, contact, fields) => {
                if (err) return response.json(false);  
                var resultado = people.concat(contact);
                console.log(resultado);
                return response.json(resultado);
            });
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
        return response.json('delete');
        banco.query('DELETE FROM <tabela> WHERE <condição> = ?', [], (err, result, fields) => {

        });
    },


    async listRead(request, response) {

        let email = request.query.email;
        let id = request.query.id;

        banco.query(`SELECT 
        (people.id_people) as ID, 
        (people.name) as Nome, 
        (people.nickname) as Sobrenome
        FROM people_user 
            INNER JOIN people ON people.id_people = people_user.id_people  
            INNER JOIN user ON user.id_user = people_user.id_user 
                WHERE user.email = ? AND user.id_user = ?`, [email, id], (err, result, fields) => {
            if (err) return response.json(false);
            return response.json(result);
        });
    },
}