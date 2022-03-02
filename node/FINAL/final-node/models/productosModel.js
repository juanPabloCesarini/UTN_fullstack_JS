const mongoose = require('../db/connect_mongo');


// Creación Schema
const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    sku: String,
    descripcion: String,
})

// Creación modelo

module.exports = mongoose.model('productos', productoSchema);