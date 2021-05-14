const express = require('express');
// creation du routeur 
const router = express.Router();

// import du model frais pour usage avec le middleware
// const Frais = require('./models/frais');

const stuffCtrl= require('../controllers/stuff');

// import du middleware auth
const auth =require('../middleware/auth');

// creation de frais de mission
router.post('/', auth, stuffCtrl.createFrais); //on ajoute auth avant les route les proteger

// mise à jour des frais selon leur id
router.put('/:id', auth, stuffCtrl.modifierFrais);
  
// Suppression d'un frais selon son id
router.delete('/:id', auth, stuffCtrl.supprimerFrais);

// recherche d'un frais selon son id
router.get('/:id', auth, stuffCtrl.createFrais);
   
//recupération de tout les frais
router.get('/', auth, stuffCtrl.toutFrais);

module.exports = router;