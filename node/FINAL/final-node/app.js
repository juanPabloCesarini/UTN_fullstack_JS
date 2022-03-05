var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require("jsonwebtoken");

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuariosRouter');
var productosRouter = require('./routes/productosRouter');
var categoriasRouter = require('./routes/categoriasRouter');
var detalleRouter = require('./routes/detalleRouter');

var app = express();

app.set('secretKey', "utnNode");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
//app.use('/productos', token_validator, productosRouter);
app.use('/productos', productosRouter);
app.use('/categorias', categoriasRouter);
app.use('/detalle', detalleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// vaidación del token

function token_validator(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey') , function (error, decoded) {
    if (error) {
      res.json({ message: error.message });
    } else {
      console.log(decoded);
      req.body.usuarioID = decoded.usuarioID;
      next();
    }
  })
}

app.token_validator = token_validator ;
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({error:true, message:err.message}); // es recomendable agregar esta linea para la devolucion de errores
});

module.exports = app;
