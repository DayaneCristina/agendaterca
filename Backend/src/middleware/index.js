/**
 * Validador de acesso a API
 */
//Requerimento de configurações

//Função de validação de Acesso
module.exports = {
    middleware(req, res, next) {
        //if(req.headers['x-access-token'] === process.env.SECRET_API){
            return next();
        //}
        //return res.json('CHAVE NÃO COMPATIVEL');
    }
}