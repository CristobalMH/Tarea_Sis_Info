var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tu código aquí
var LibroSchema = Schema({
  Autor:{
    nombre_s: String,
    apellidos: String
  },
  ISBN: String,
  Título: String,
  Genero: String,
  Edición: Number,
  Editorial: String,
  Páginas: Number,
  Sinopsis: String
})

module.exports = mongoose.model('Libro', LibroSchema);
