const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const express = require('express');
const router = express.Router();

const cantidadIdioAprender = require('../models/User');

router.get('/ConsultaAdmi/Consulta4Admi', (req, res) => {
    res.render('ConsultaidiomasApren/ConsultidiomasAprend');
});


router.post("/ConsultaidiomasApren/ConsultidiomasAprend", async (req, res) => {
    const { idiomasAprender } = req.body;
    console.log('holi');
    const Cantiiioapre = await cantidadIdioAprender.aggregate([
        {"$unwind":"$languageL"},{"$group":{"_id":"$languageL","total_idioma":{"$sum":1}}}]);
    /*for(var x=0; x<=Todos.length;x++){
        var obj = Todos[x];
        console.log(obj);
        res.render('ConsultaTodoRegistro/Todosregistros',{obj});
    }*/
    res.render('ConsultaidiomasApren/ConsultidiomasAprend', { Cantiiioapre });
});

module.exports = router;