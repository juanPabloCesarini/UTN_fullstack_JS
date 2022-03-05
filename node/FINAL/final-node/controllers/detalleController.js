const productoModel = require('../models/productosModel');


module.exports = {

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