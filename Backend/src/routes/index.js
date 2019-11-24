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
router.post('/user',controllerUser.post);
//Atualizar
router.put('/user',controllerUser.put);
//Deletar
router.delete('/user',controllerUser.delete);

/*############################## Contato ###################################*/
//Lista de usuarios
router.get('/peoples',controllerPeople.list);
//Leitura
router.get('/people',controllerPeople.get);
//Inserir
router.post('/people',controllerPeople.post);
//Atualizar
router.put('/people',controllerPeople.put);
//Deletar
router.delete('/people/:user/:people',controllerPeople.delete);

//Exportando rotas
module.exports = router;