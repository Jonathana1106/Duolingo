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
        req.flash('success_msg', 'Datos añadidos con éxito')
            //Redirecciona a esa ruta
        res.redirect('/notes');
    }
});


router.get("/notes", async(req, res) => {
    await Note.find().sort({ date: 'desc' }).then((documentos) => {
        const contexto = {
            notes: documentos.map((documento) => {
                return {
                    _id: documento._id,
                    title: documento.title,
                    description: documento.description,
                };
            }),
        };
        res.render("notes/all-notes", {
            notes: contexto.notes,
        });
    });
});

router.get('/notes/edit/:id', async(req, res) => {
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-notes', { note });
});

router.put('/notes/edit-notes/:id', async(req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg', 'Datos actualizados con éxitos');
    res.redirect('/notes');
});

router.delete('/notes/delete/:id', async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Datos eliminados con éxito');
    res.redirect('/notes');
});


/*/Editar los datos de la base
router.get('/notes/edit/:id', (req, res) => {
    const note = await Note.findById(req.params.id).then((documentos) => {
        const contexto = {
            notes: documentos.map((documento) => {
                return {
                    title: documento.title,
                    description: documento.description,
                };
            }),
        };
        res.render('notes/edit-notes', {
            notes: contexto.notes,
        });
    });
});*/

module.exports = router;