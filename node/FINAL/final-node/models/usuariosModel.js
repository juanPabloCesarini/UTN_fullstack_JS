const mongoose = require('../db/connect_mongo');
const err_mge = require('../util/util_error_message');
const valid = require('../util/validator');

const bcrypt = require('bcrypt');

// Creación Schema
const usuarioSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required: [true, err_mge.GELERAL.campo_obligatorio],
    },
    email: {
        type:String,
        required: [true, err_mge.GELERAL.campo_obligatorio],
        unique: true,
        validate: {
            validator: function (value) {
                return valid.email_validation(value)
            },
            message: err_mge.USUARIOS.email_no_valido
        }
    },
    password: {
        type:String,
        required: [true, err_mge.GELERAL.campo_obligatorio],
          validate:{
            validator:function(value){
                return valid.pass_ok(value)
            },
            message:err_mge.USUARIOS.pass_no_valida
        }
    }
})

// hasheando la contraseña
usuarioSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});


// Creación modelo

module.exports = mongoose.model('usuarios', usuarioSchema);