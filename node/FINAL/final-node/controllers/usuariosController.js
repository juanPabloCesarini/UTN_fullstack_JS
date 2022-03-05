const usuarioModel = require('../models/usuariosModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports = {
    create: async function (req, res, next) {
        try {
            console.log(req.body);
            const usu = new usuarioModel({
                nombre: req.body.nombre,
                email: req.body.email,
                password: req.body.password,
            });
            const document = await usu.save();
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
            const documents = await usuarioModel.find();
            res.json(documents);
        } catch (e) {
            console.log(e);
            next(e);
        }
    },

    login: async function (req, res, next) {
        try {
            const us = await usuarioModel.findOne({ email: req.body.email });
            if (!us) {
                res.json({ error: true, message: "Usuario no existe" });
                return
            }
            if (bcrypt.compareSync(req.body.password, us.password)) {
                const token = jwt.sign({usuarioID:us._id}, req.app.get('secretKey'),{expiresIn:"1h"})
                res.json({ error: false , token});
                return
            } else {
                res.json({ error: true, message: "Contraseña incorrecta" });
                return
            }
            

        } catch (e) {
            next(e);
        }
    },

    
}