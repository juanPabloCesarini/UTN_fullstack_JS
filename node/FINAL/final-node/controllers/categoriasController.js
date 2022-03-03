const categoriaModel = require('../models/categoriasModel');


module.exports = {
    create: async function (req, res, next) {
        try {
            console.log(req.body);
            const cat = new categoriaModel({
                nombre: req.body.nombre,
               
            });
            const document = await cat.save();
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
            const documents = await categoriaModel.find();
            res.json(documents);
        } catch (e) {
            console.log(e);
            next(e);
        }
    },

    getById: async function (req, res, next) {
        console.log(req.params, req.params.id);
        try {
            const documents = await categoriaModel.findById(req.params.id);
            res.json(documents);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }

}