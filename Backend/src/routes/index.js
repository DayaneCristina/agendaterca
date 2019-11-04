/**
 * Model de manipulação do banco de dados
 * 
 * Diretorio Pai - src/routes
 */

//Requerimento de dependencia (EXPRESS)
const exp = require('express');

//Configurando Rotas
const router = exp.Router();

//Requerindo controller
const controller = require('../controllers');

//Leitura
router.get('/get',controller.get);
//Inserir
router.post('/post',controller.post);
//Atualizar
router.put('/put',controller.put);
//Deletar
router.delete('/delete',controller.delete);

//Exportando rotas
module.exports = router;