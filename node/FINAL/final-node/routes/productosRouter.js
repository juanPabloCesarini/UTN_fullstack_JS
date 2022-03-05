var express = require('express');
const app = require('../app');
var router = express.Router();

const productosController = require('../controllers/productosController');

//router.get('/', productosController.getAll);
//router.get('/:id', productosController.getById);
router.post('/', (req, res, next)=>{req.app.token_validator(req,res,next)},productosController.create);


module.exports = router;