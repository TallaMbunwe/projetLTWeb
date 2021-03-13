const bcrypt  = require('bcrypt');// importation de bcrypt
const jwt = require('jsonwebtoken'); // importation de package de création de token

const Salarie = require('../models/salarie');
exports.signup = (req, res, next) => { console.log('here I am', req.body);
      
    bcrypt.hash(req.body.password, 10)//la fonction de hachage bcrypt fait saler le mot de passe 10 fois
    //création et enregistrement dans la base de données retournant un réponse d'enregistrement réussie
    .then(hash => {
        const salarie = new Salarie({
            // nomSalarie:req.body.nomSalarie,
            // emailSalarie:req.body.emailSalarie,
            nomSalarie:req.body.email,
            emailSalarie:req.body.email,
            motdepasse: hash
        });
        salarie.save()
        .then(() => res.status(201).json({ message: 'Salarié crée avec succés!'}))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));

};

exports.login = (req, res, next) => {
  let fetchedUser;
    Salarie.findOne({ emailSalarie: req.body.email })
      .then(salarie => {
        if (!salarie) {
          return res.status(401).json({ error: 'Salarié non trouvé !' });
        }

        fetchedUser =salarie;
        bcrypt.compare(req.body.password, fetchedUser.motdepasse)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            const token = jwt.sign(
              { salarieId: fetchedUser._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            );
          
            res.status(200).json({
              salarieId: fetchedUser._id,
              token: token
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };