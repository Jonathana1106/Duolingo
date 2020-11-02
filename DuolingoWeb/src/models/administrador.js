const mongoose = required('mongoose');
const { Schema } = mongoose;

const AdministradorSchema = new Schema({
    nombre: {type: String, requiered:true},
    correo: {type:String, required:true},
    contraseña: {type:String, required:true},
});

module.exports = mongoose.model('administrador', NoteSchema)