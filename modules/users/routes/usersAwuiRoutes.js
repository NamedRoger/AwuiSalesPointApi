const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send(' esto es otra pruba');
});

module.exports = router;