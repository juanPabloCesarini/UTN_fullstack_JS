const mongoose = require("../db/connect_mongo")


const productSchema = mongoose.Schema({
    name:String,
    sku:String,
    description:String,
    price:Number,
    quantity:Number,
    deleted:Boolean // se usa para el borrado lógico
})


module.exports = mongoose.model("products",productSchema)