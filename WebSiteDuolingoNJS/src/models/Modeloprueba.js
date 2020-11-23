const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const idiomaA = new Schema({ idioma: String, Conocimiento: String });
const pruebaSchema = new Schema({
    Nombre: {
        type: String,
        required: true
    },
    Edad: {
        type: String,
        required: true
    },
    Sexo: {
        type: String,
        required: true
    },
    idiomasEnsenar: { Type: [idiomaA] },

    user: { type: String }
});

pruebaSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

pruebaSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);

};
module.exports = mongoose.model('Modeloprueba', pruebaSchema);
