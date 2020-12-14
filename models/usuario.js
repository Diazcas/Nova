//Importar el modulo de mongoose
var mongoose = require("mongoose");
//Declarar el esquema
var esquema = new mongoose.Schema({
  user: String,
  nombreEmpresa: String, 
	email: String,
  password: String,
  telefono: String,
  direccion: String
});

//Exportar el modelo y se enlaza la colección con el esquema
module.exports = mongoose.model("Usuarios", esquema);
