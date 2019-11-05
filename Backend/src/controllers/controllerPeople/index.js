// @ts-nocheck
/**
 * Controller da estrutura
 * 
 * Diretorio Pai - src/controllers
 */

//Requisição das models
const modelPeople = require('../../models/modelPeople');

module.exports = {

    /**
     * Metodo de redireciona 
     * para o model de leitura
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async get(request, response){
        modelPeoples.read(request, response);
    },

    /**
     * Metodo de redireciona 
     * para o model de criação
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async post(request, response){
        modelPeoples.create(request, response);
    },

    /**
     * Metodo de redireciona 
     * para o model de atualização
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async put(request, response){
        modelPeoples.update(request, response);
    },

    /**
     * Metodo de redireciona 
     * para o model de deletar
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async delete(request, response){
        modelPeoples.delete(request, response);
    }
}