var express = require('express');
var router = express.Router();

const productosController = require('../controllers/productosController');

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get('/', productosController.getAll);
module.exports = router;
