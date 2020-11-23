const express = require('express');
const router = express.Router();


const Admin = require('../models/Admin');
const passportA = require('passport');
const { route } = require('./notes');

router.get('/admins/login', (req, res) => {
    res.render('admins/login');
});

router.post('/admins/login', passportA.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/admins/login',
    failureFlash: true
}));

router.get('/admins/signup', (req, res) => {
    res.render('admins/signup');
});

router.post("/admins/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const errors = [];

    if (name.length <= 0) {
        errors.push({ text: 'Por favor, ingrese su nombre' });
    }
    if (email.length <= 0) {
        errors.push({ text: 'Por favor, ingrese su correo' });
    }
    if (password.length <= 0) {
        errors.push({ text: "Por favor, ingrese su contraseña" });
    }
    if (password.length < 4) {
        errors.push({ text: "La contraseña debe tener más de 4 caracteres" });
    }
    if (errors.length > 0) {
        res.render('admins/signup', { errors, name, password });
    } else {
        const emailAdmin = await Admin.findOne({ email: email });
        if (emailAdmin) {
            req.flash('error_msg', 'Este correo ya existe');
            res.redirect('/admins/signup');
        }
        const newAdmin = new Admin({ name, email, password });
        newAdmin.password = await newAdmin.encryptPassword(password);
        await newAdmin.save();
        req.flash('success_msg', 'Administrador registrado');
        res.redirect('/admins/login');
    }

});

router.get('/admins/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;