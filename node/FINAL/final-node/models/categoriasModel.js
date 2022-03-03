const mongoose = require('../db/connect_mongo');
const err_mge = require('../util/util_error_message');

// Creación Schema
const categoriaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: [true, err_mge.GELERAL.campo_obligatorio],
    },
    
})

productoSchema.set("toJSON",{getters: true});
// Creación modelo

module.exports = mongoose.model('categorias', categoriaSchema);