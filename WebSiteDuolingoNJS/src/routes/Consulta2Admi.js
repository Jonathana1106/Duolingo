const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const express = require('express');
const router = express.Router();

const registroCant = require('../models/User');

router.get('/ConsultaAdmi/Consulta2Admi', (req, res) => {
    res.render('ConsultaPracticarEnseniar/practicarEnseniar');
});


router.post("/ConsultaPracticarEnseniar/practicarEnseniar", async (req, res) => {
    const { PaisOrigen } = req.body;
    const CantPais = await registroCant.aggregate([{
        "$group":{"_id":"$PaisOrigen","Total_paises":{"$sum":1}}
    }]);
    /*for(var x=0; x<=Todos.length;x++){
        var obj = Todos[x];
        console.log(obj);
        res.render('ConsultaTodoRegistro/Todosregistros',{obj});
    }*/
    res.render('ConsultaPracticarEnseniar/practicarEnseniar', { CantPais });
});

module.exports = router;




