"use strict";

const express = require('express');
const router = express.Router();

const usersModuleRoutes = require('../modules/users/routes');
/* GET home page. */
router.get('/',(req, res) => {
    res.send('Bienvendo a la API de AWUI');
})

// users
router.use('/account',usersModuleRoutes.accountRouter);
router.use('/users/awui/branch',usersModuleRoutes.usersBranchRouter);
//

module.exports = router;
