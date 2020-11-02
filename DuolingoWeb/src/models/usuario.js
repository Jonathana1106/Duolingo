const { STRING_TYPE } = require("@angular/compiler");
const { interval } = require("rxjs");

const mongoose = required('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombre: {type: String, requiered:true},
    edad: {type: Number, required:true},
    sexo: {type:String, require:true},
    correo: {type:String, required:true},
    contraseña: {type:String, required:true},
    paisOrigen: {type:String, required:true},
    idiomaAprender: {type:String, required:true},
    nivelAprender:{type:String, required:true},
    idiomaEnseñar: {type:String, requiered:true},
    nivelEnseñar:{type:String, requiered:true},
    hobbies: {type:String, requiered:true},
    medio: {type:String, requiered:true}
});

module.exports = mongoose.model('usuario', NoteSchema)