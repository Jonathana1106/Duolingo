const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const express = require('express');
const router = express.Router();

const registroCant = require('../models/User');

router.get('/ConsultaAdmi/Consulta3Admi', (req, res) => {
    res.render('ConsultaEnseniar/enseniar');
});


router.post("/ConsultaEnseniar/enseniar", async (req, res) => {
    const { idiomasteach } = req.body;
    console.log('holi');
    const Cantidadt = await registroCant.aggregate([
        {"$unwind":"$idiomasteach"},{"$group":{"_id":"$idiomasteach.idioma","total_idioma":{"$sum":1}}}]);
    /*for(var x=0; x<=Todos.length;x++){
        var obj = Todos[x];
        console.log(obj);
        res.render('ConsultaTodoRegistro/Todosregistros',{obj});
    }*/
    res.render('ConsultaEnseniar/enseniar', {Cantidadt});
});
/*for(var x=0; x<=Todos.length;x++){
        var obj = Todos[x];
        console.log(obj);
        res.render('ConsultaTodoRegistro/Todosregistros',{obj});
    }*/

module.exports = router;



