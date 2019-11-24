/**
 * Validador de acesso a API
 */
//Requerimento de configurações
const config = require('../config');

//Função de validação de Acesso
module.exports = {
    middleware(req, res, next) {
        //if(req.headers['x-access-token'] === config.Key){
            return next();
        //}
        //return res.json('CHAVE NÃO COMPATIVEL');
    }
}