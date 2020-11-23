const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

const { isAuthenticated }=require('../helpers/auth');

router.get('/notes/add',isAuthenticated, (req, res) => {
    res.render('notes/newnote');
})

router.post('/notes/newnote',isAuthenticated, async(req, res) => {
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
        newNote.user = req.user.id;
        await newNote.save(); //Guarda en la base
        req.flash('success_msg', 'Datos añadidos con éxito');
        //Redirecciona a esa ruta
        res.redirect('/notes');
    }
});


router.get("/notes",isAuthenticated, async(req, res) => {
    const notes=  await Note.find({user: req.user.id}).sort({date: 'desc'});
    res.render('notes/all-notes',{notes}); 
});
/*
try {
      const user = await _id.findOne({_id: req.body._id});
      res.render('notes/edit-notes', {
        _id: _id.toObject(),
        title: title.toObject(),
        description: documento.toObject(),
      })
    } catch (err) {
        console.error(err);
      } 
});*/

router.get('/notes/edit/:id', async(req, res) => {
    const id=req.params.id;
    const editNote=await Note.findById(id);
    res.render('notes/edit-note',{title:editNote.title,description:editNote.description,_id:editNote._id})
});

/*
router.get('/notes/edit/:id', isAuthenticated, async(req, res) => {
    await notes.findById(req.params._id).then((documentos) => {
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
            notes: contexto.notes
        });
    });
});

*/

router.put('/notes/edit-note/:id',isAuthenticated, async(req, res) => {
    const {title,description}=req.body;
    await Note.findByIdAndUpdate(req.params.id,{title,description});
    res.redirect('/notes');
});

/*
router.put('/notes/edit-notes/:id',isAuthenticated, async(req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params._id).then((documentos) => {
        const contexto = {
            notes: documentos.map((documento) => {
                return {
                    _id: _id,
                    title: title,
                    description: description,
                };
            }),
        };
    
    req.flash('success_msg', 'Datos actualizados con éxitos');
    res.redirect('/notes');
    })
});
*/

router.delete('/notes/delete/:id', isAuthenticated,async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Datos eliminados con éxito');
    res.redirect('/notes');
});



module.exports = router;