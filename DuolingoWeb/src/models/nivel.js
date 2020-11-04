const mongoose = required("mongoose");
const { Schema } = mongoose;

const nivelSchema = new Schema({
  nombre: { type: String, required: true },
});

module.exports = mongoose.model("nivelAprender", NoteSchema);
