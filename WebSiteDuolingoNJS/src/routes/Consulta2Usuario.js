const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const express = require('express');
const router = express.Router();

const registroPers = require('../models/User');

router.get('/ConsultaUsu/Consulta2Usuario', (req, res) => {
    res.render('ConsultaFiltropais2/ConsultaFiltropais');
});


router.post("/ConsultaFiltropais2/ConsultaFiltropais", async (req, res) => {
    const { Nombre } = req.body;
    const Todos = await registroPers.find({ Nombre: Nombre });
    res.render('ConsultaFiltropais2/ConsultaFiltropais', { Todos });
});

module.exports = router;