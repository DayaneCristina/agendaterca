/**
 * Model de manipulação do banco de dados
 * 
 * Diretorio Pai - src/routes
 */

//Requerimento de dependencia (EXPRESS)
const exp = require('express');

//Configurando Rotas
const router = exp.Router();

//Requerindo controller de Usuario
const controllerUser = require('../controllers/controllerUser');
//Requerindo controller de Contatos
const controllerPeople = require('../controllers/controllerPeople');

/*############################## Usuario ###################################*/
//Leitura
router.get('/:email/:senha',controllerUser.get);
//Inserir
router.post('/user/cadastro',controllerUser.post);
//Atualizar
router.put('/put',controllerUser.put);
//Deletar
router.delete('/delete',controllerUser.delete);

/*############################## Contato ###################################*/
//Leitura
router.get('/peoples',controllerPeople.list);
router.get('/people',controllerPeople.get);
//Inserir
router.post('/post',controllerPeople.post);
//Atualizar
router.put('/put',controllerPeople.put);
//Deletar
router.delete('/delete',controllerPeople.delete);

//Exportando rotas
module.exports = router;