const express = require('express');
const router = express.Router();
const salarieCtrl = require('../controllers/salarie');

router.post('/signup', salarieCtrl.signup);
router.post('/login', salarieCtrl.login);

module.exports = router;