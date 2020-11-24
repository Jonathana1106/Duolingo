const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../helpers/auth');
const { route } = require('./users');
const User = require('../models/User');
const passport = require('passport');
const { findById } = require('../models/User');


router.get("/todo",isAuthenticated,  async (req, res) => {
    //const info = await User.find({user: req.user.body}).sort({ title:1 });
    const hola=req.body;
    const info = await User.find(hola);
    res.render('Pantallaprincipal/Pantallaprincipal', { info });
});

router.get('/todo/edit/:id',isAuthenticated, async (req, res) => {
    //const id = req.params.id;
    const editar = await User.findById(req.params.id);
    res.render('Pantallaprincipal/EditarUsuario', {editar})
});

router.put('/todo/PantallaPrincipal/EditarUsuario/:id',isAuthenticated, async (req, res) => {
    const {title,description} = req.body;
    const noteid=req.params.id;
    await Note.findByIdAndUpdate(noteid, {title,description});
    res.redirect('/todo');
});

router.get('/todo/Pantallaprincipal/ConsultasAdministradores',isAuthenticated, (req, res) => {
    res.render('Pantallaprincipal/ConsultasAdministradores');
});


router.get('/ConsultaTodoRegistro/TodosRegistros',isAuthenticated, (req, res) => {
    res.render('ConsultaTodoRegistro/TodosRegistros');
});


router.get('/ConsultaFiltropais2/ConsultaFiltropais',isAuthenticated, (req, res) => {
    res.render('ConsultaFiltropais2/ConsultaFiltropais');
});

router.get('/ConsultaEnseniar/enseniar',isAuthenticated, (req, res) => {
    res.render('ConsultaEnseniar/enseniar');
});

router.get('/ConsultaidiomasApren/ConsultidiomasAprend',isAuthenticated, (req, res) => {
    res.render('ConsultaidiomasApren/ConsultidiomasAprend');
});




module.exports = router;