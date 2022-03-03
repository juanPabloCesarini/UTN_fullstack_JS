const mongoose = require('../db/connect_mongo');
const err_mge = require('../util/util_error_message');

// Creación Schema
const productoSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: [true, err_mge.GELERAL.campo_obligatorio],
    },
    precio: {
        type: Number,
        required: [true, err_mge.GELERAL.campo_obligatorio],
        min: [1, err_mge.PARTICULAR.campo_precio],
        get: function(value){
            return "$ "+value
        }
    },
    sku: String,
    descripcion: {
        type: String,
        required: [true, err_mge.GELERAL.campo_obligatorio],
    },
    categoria:{
        type:mongoose.Schema.ObjectId,
        ref: categorias,
    }
})

productoSchema.set("toJSON",{getters: true});
// Creación modelo

module.exports = mongoose.model('productos', productoSchema);