const express = require('express');
const { registerCtrl, loginCtrl } = require('../controllers/auth');
const { validatorRegister, validatorLogin } = require('../validators/auth');
const router = express.Router();

// POST /auth/register - Register a new association
router.post('/register', validatorRegister, registerCtrl);

// POST /auth/login - Authenticate an association
router.post('/login', validatorLogin, loginCtrl);

module.exports = router;
