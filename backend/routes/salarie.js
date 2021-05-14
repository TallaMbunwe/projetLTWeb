const express = require('express');
// const bcrypt = require("bcrypt");

const router = express.Router();
const salarieCtrl = require('../controllers/salarie');

const Salarie = require('../models/salarie');

// import du middleware auth
const auth =require('../middleware/auth');

 //router.post('/signup', auth, salarieCtrl.signup);
 router.post('/register', salarieCtrl.signup);

router.post('/login', salarieCtrl.login);

module.exports = router;