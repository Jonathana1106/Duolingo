const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../helpers/auth');

const User = require('../models/User');
const passport = require('passport');
//const { route } = require('./notes');

router.get('/users/loginregister', (req, res) => {
    res.render('users/loginregister');
});

router.post('/users/loginregister', passport.authenticate('local', {
    successRedirect: '/todo',
    failureRedirect: '/users/loginregister',
    failureFlash: true
}));

router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.post("/users/signup", async (req, res) => {
    const { name, age, sex, paisO, languageL, languageT, hobbies, plattform, email, password } = req.body;
    const errors = [];

    if (name.length <= 0) {
        errors.push({ text: 'Por favor, ingrese su nombre' });
    }
    if (age.length <= 0) {
        errors.push({ text: 'Por favor, ingrese su nombre' });
    }
    if (sex.length <= 0) {
        errors.push({ text: 'Por favor, ingrese su nombre' });
    }
    if (paisO.length <= 0) {
        errors.push({ text: 'Por favor, ingrese su nombre' });
    }
    if (languageL.length <= 0) {
        errors.push({ text: 'Por favor, ingrese su nombre' });
    }
    if (languageT.length <= 0) {
        errors.push({ text: 'Por favor, ingrese su nombre' });
    }
    if (hobbies.length <= 0) {
        errors.push({ text: 'Por favor, ingrese su nombre' });
    }
    if (plattform.length <= 0) {
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
        res.render('users/signup', { errors, name, password });
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash('error_msg', 'Este correo ya existe');
            res.redirect('/users/signup');
        }
        const newUser = new User({ name, age, sex, paisO, languageL, languageT, hobbies, plattform, email, password });
        //newUser.user=req.user.id;
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Usuario registrado');
        res.redirect('/users/loginregister');
    }

});

router.get('/users/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
/*
router.post("/agregaridioma/agregarIA", async (req, res) => {
    const {lenguA}=req.body;
    const insertar = await User.update(
        {"_id":user._id},
        {"$push":{"$idioma":lenguA}},
        function(err,raw){
            if(err)return handleError(err);
            console.log(raw)
        }
    )
    res.render('Pantallaprincipal/Pantallaprincipal')

});
*/
module.exports = router;
