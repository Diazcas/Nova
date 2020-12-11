//Importar el modulo de mongoose
var mongoose = require("mongoose");
//Declarar el esquema
var esquema = new mongoose.Schema({
  user: String,
  password: String,
});

//Exportar el modelo y se enlaza la colección con el esquema
module.exports = mongoose.model("Usuarios", esquema);
