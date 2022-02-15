const productsModel = require("../models/productsModel")
module.exports={
    getAll: async function(req, res, next) {
        console.log(req.query)
        try{
            const documents = await productsModel.find()
            res.json(documents);
        }catch(e){
            console.log(e)
        }
        
      },
    getById: async function(req, res, next) {
        console.log(req.params,req.params.id)
        try{
            const documents = await productsModel.findById(req.params.id)
            res.json(documents);
        }catch(e){
            console.log(e)
        }
      },
    create:async function(req, res, next) {
        try{
            console.log(req.body)
            const producto = new productsModel({
                name:req.body.name,
                sku:req.body.sku,
                description:req.body.description,
                price:req.body.price,
                quantity:req.body.quantity, 
            })
            const document = await producto.save()
            res.json(document)
        }catch(e){
            console.log(e)
        }
        
      },
    update: async function(req, res, next) {
        try{
            console.log(req.body)
            const update = await productsModel.updateOne({_id:req.params.id},req.body)
            res.json(update)
        }catch(e){
            console.log(e)
        }
      },
    delete: async function(req, res, next) {
        try{
            console.log(req.body)
            const deleted = await productsModel.deleteOne({_id:req.params.id})
            res.json(deleted)
        }catch(e){
            console.log(e)
        }
      }
}