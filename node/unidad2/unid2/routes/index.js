var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  const productos = [
    {
      id:1,
      nombre:"moto g"
    },
    {
      id:2,
      nombre:"iPhone 12"
    }
  ];
 // res.render('index', { title: 'Ecommerce' });
  res.json(productos);
});

module.exports = router;
