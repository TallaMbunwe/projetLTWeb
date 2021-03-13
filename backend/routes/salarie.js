const express = require('express');
// const bcrypt = require("bcrypt");

const router = express.Router();
const salarieCtrl = require('../controllers/salarie');

const Salarie = require('../models/salarie');

 router.post('/signup', salarieCtrl.signup);

// router.post('/signup', (req, res, next) => { 
//     const bdsal = Salarie.find({});
//     console.log(bdsal);
//     bcrypt.hash(req.body.password, 10)
//     .then(hash =>{
//         const salarie = new Salarie({
//             email: req.body.email,
//             password: hash
//         });
//         salarie.save()
//         .then(result =>{ res.status(201).json({
//             message: 'Salarier crée!',
//             result: result
//         });
//     })
//     .catch(err => {
//         res.status(500).json({
//             error: err
//         })
//     })

//     })
    
// });

router.post('/login', salarieCtrl.login);

module.exports = router;