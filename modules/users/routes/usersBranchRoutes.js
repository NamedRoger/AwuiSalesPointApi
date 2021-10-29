const express = require('express');
const router = express.Router();
const {branchMiddleware} = require('../../../middleware');
const usersBranchController = require('../controllers/usersBranchControll');

router.use(branchMiddleware);

router.get('/',usersBranchController.getAllUsers);

module.exports = router;