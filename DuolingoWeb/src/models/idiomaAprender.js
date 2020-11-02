const mongoose = required('mongoose');
const { Schema } = mongoose;

const idiomaAprenderSchema = new Schema({
    nombre: {type: String, requiered:true},
    tipo: {type:String, required:true},
});

module.exports = mongoose.model('idiomaAprender', NoteSchema)