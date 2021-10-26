const express = require('express');
const router = express.Router();
const {branchMiddleware} = require('../../../middleware');

router.use(branchMiddleware);

router.get('/prueba',(req, res) => {
    res.send('esto es una prueba');
});

module.exports = router;