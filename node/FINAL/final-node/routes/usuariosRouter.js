var express = require('express');
var router = express.Router();

const usuariosController = require('../controllers/usuariosController');

//router.get('/:id', usuariosController.getById);
router.post('/', usuariosController.create);
router.post('/login', usuariosController.login);
router.get('/', usuariosController.getAll);

module.exports = router;
