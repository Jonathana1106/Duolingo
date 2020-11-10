const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/notes/add', (req, res) => {
    res.render('notes/newnote');
})

router.post('/notes/newnote', async(req, res) => {
    const { title, description } = req.body; //Se sacan los valores introducidos
    const errors = []
    if (!title) {
        errors.push({ text: 'Por favor escriba un titulo' });
    }
    if (!description) {
        errors.push({ text: 'Por favor escriba una descripcion' });
    }
    if (errors.length > 0) {
        res.render('notes/newnote', {
            errors,
            title,
            description
        });
    } else {
        const newNote = new Note({ title, description });
        await newNote.save(); //Guarda en la base
        //Redirecciona a esa ruta
        res.redirect('/notes');
    }
});


router.get('/notes', async(req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', { notes });
});
/*Donde estan guardados los datos
router.get('/notes', async(req, res) => {
    //Para consultar desde la base
    //Consulta de todos los datos
    const notes = await Note.find();
    //Redirecciona a otra vista
    res.render('notes/all-notes', { notes });
});*/

module.exports = router;