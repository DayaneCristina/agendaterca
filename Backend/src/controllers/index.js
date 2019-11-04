/**
 * Controller da estrutura
 * 
 * Diretorio Pai - src/controllers
 */

//Requisição das models
const models = require('../models');

module.exports = {

    /**
     * Metodo de redireciona 
     * para o model de leitura
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async get(request, response){
        models.read(request, response);
    },

    /**
     * Metodo de redireciona 
     * para o model de criação
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async post(request, response){
        models.create(request, response);
    },

    /**
     * Metodo de redireciona 
     * para o model de atualização
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async put(request, response){
        models.update(request, response);
    },

    /**
     * Metodo de redireciona 
     * para o model de deletar
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async delete(request, response){
        models.delete(request, response);
    }
}