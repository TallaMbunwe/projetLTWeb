const express = require('express');
// creation du routeur 
const router = express.Router();

// import du model frais pour usage avec le middleware
// const Frais = require('./models/frais');

const stuffCtrl= require('../controllers/stuff');

// import du middleware auth
const auth =require('../middleware/auth');

// app.post('/api/stuff', (req, res, next) => {
//   console.log(req.body);
//   res.status(201).json({
//     message: 'Objet créé !'
//   });
// });

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



// app.use('/api/stuff', (req, res, next) => {
//   const stuff = [
//     {
//       _id: 'oeihfzeoi',
//       title: 'Mon premier objet',
//       description: 'Les infos de mon premier objet',
//       imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//       price: 4900,
//       userId: 'qsomihvqios',
//     },
//     {
//       _id: 'oeihfzeomoihi',
//       title: 'Mon deuxième objet',
//       description: 'Les infos de mon deuxième objet',
//       imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//       price: 2900,
//       userId: 'qsomihvqios',
//     },
//   ];
//   res.status(200).json(stuff);
// });

module.exports = router;