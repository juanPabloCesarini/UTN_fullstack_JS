var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true }, function (error) {
    if (error) {
        throw error;
    } else {
        console.log("conectado a db");
    }
});

module.exports = mongoose;