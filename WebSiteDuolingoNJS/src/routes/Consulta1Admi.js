const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const express = require('express');
const router = express.Router();

const registroPers = require('../models/User');

router.get('/ConsultaAdmi/Consulta1Admi', (req, res) => {
    res.render('ConsultaTodoRegistro/Todosregistros');
});


router.post("/ConsultaTodoRegistro/Todosregistros", async (req, res) => {
    const { Nombre } = req.body;
    const Todos = await registroPers.find({ Nombre: Nombre });
    /*for(var x=0; x<=Todos.length;x++){
        var obj = Todos[x];
        console.log(obj);
        res.render('ConsultaTodoRegistro/Todosregistros',{obj});
    }*/
    res.render('ConsultaTodoRegistro/Todosregistros', { Todos });
});

module.exports = router;




