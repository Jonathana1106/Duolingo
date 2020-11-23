const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});


router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/Consulta1', (req, res) => {
    res.render('Consulta1');
});


router.get('/ConsultaAdm', (req, res) => {
    res.render('ConsultasAdministradores');
});


module.exports = router;