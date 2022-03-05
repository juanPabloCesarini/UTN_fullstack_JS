var express = require('express');
var router = express.Router();

const detalleController = require('../controllers/detalleController');


router.get('/:id', detalleController.getById);



module.exports = router;