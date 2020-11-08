const express = require('express');
const router = express.Router();

router.get('/users/loginregister', (req, res) => {
    res.render('users/loginregister');
});

module.exports = router;