const mongoose = required("mongoose");
const { Schema } = mongoose;

const idiomaSchema = new Schema({
  nombre: { type: String, required: true },
});

module.exports = mongoose.model("idioma", NoteSchema);
