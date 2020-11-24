const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const express = require('express');
const router = express.Router();

const filtroidioma = require('../models/User');


router.get('/ConsultaUsu/Consulta2Usuario', (req, res) => {
    res.render('ConsultaFiltropais2/ConsultaFiltropais');
});

router.post("/ConsultaFiltropais2/ConsultaFiltropais", async (req, res) => {
    var Info = req.body;
    var arreglo = [];
    Info.idiomateach.forEach(async element1 => {
        Info.idiomaAprender.forEach(async element2 => {
            var arreglo1 = [element1.idioma];
            var arreglo2 = [element2.idioma];
            arreglo = await filtroidioma.find({
                'idiomasAprender.idioma': {
                    "$in": arreglo1
                },
                'idiomasteach.idioma': {
                    "$in": arreglo2
                }
            });
            if (arreglo != 0) {
                res.render('/ConsultaFiltropais2/ConsultaFiltropais', { arreglo })
            }
        });

    });
    // res.render('ConsultaFiltropais2/ConsultaFiltropais', { Todos });
});

module.exports = router;
