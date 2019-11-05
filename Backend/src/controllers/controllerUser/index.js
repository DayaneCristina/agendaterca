// @ts-nocheck
/**
 * Controller da estrutura
 * 
 * Diretorio Pai - src/controllers
 */

//Requisição das models
const modelUsers = require('../../models/modelUser');

module.exports = {

    /**
     * Metodo de redireciona 
     * para o model de leitura
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async get(request, response){
        modelUsers.read(request, response);
    },

    /**
     * Metodo de redireciona 
     * para o model de criação
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async post(request, response){
        modelUsers.create(request, response);
    },

    /**
     * Metodo de redireciona 
     * para o model de atualização
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async put(request, response){
        modelUsers.update(request, response);
    },

    /**
     * Metodo de redireciona 
     * para o model de deletar
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async delete(request, response){
        modelUsers.delete(request, response);
    }
}