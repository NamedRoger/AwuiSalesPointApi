const express = require('express');
const router = express.Router();

const usersModuleRoutes = require('../modules/users/routes');
/* GET home page. */
router.use('/',(req, res) => {
    res.send('Bienvendo a la API de AWUI');
})
router.use('/account',usersModuleRoutes.accountRouter);

module.exports = router;
