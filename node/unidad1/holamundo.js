var fs = require("fs"); 
fs.readFile("./txt/holamundo.txt", function(error, archivo) {
 console.log("contenido del archivo: " + archivo);
})