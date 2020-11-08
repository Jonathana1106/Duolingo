const express = require('express');
const router = express.Router();

router.get('/users/busquedas', (req, res) => {
    res.send('Busquedas');
});

module.exports = router;