const productoModel = require('../models/productosModel');


module.exports = {
    create: async function (req, res, next) {
        try {
            console.log(req.body);
            const prod = new productoModel({
                nombre: req.body.nombre,
                precio: req.body.precio,
                sku: req.body.sku,
                descripcion: req.body.descripcion,
                categoria: req.body.categoria
            });
            const document = await prod.save();
            res.json(document);
        } catch (e) {
            console.log(e);
            //res.json(e.message);
            next(e);

        }
        
    },

    getAll: async function (req, res, next) {
        console.log(req.query);
        try {
            const documents = await productoModel.find()
                .populate("categoria")
                .sort({precio:-1, nombre:1})
            res.json(documents);
        } catch (e) {
            console.log(e);
            next(e);
        }
    },

    getById: async function (req, res, next) {
        console.log(req.params, req.params.id);
        try {
            const documents = await productoModel.findById(req.params.id);
            res.json(documents);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }

}