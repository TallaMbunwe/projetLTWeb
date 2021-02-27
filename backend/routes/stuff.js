const express = require('express');
// creation du routeur 
const router = express.Router();

// //import du model frais pour usage avec le middle ware
// const Frais = require('./models/frais');

const stuffCtrl= require('../controllers/stuff');

// app.post('/api/stuff', (req, res, next) => {
//   console.log(req.body);
//   res.status(201).json({
//     message: 'Objet créé !'
//   });
// });

// creation de frais de mission
router.post('/', stuffCtrl.createFrais);

// mise à jour des frais selon leur id
router.put('/:id', stuffCtrl.modifierFrais);
  
// Suppression d'un frais selon son id
router.delete('/:id', stuffCtrl.supprimerFrais);

// recherche d'un frais selon son id
router.get('/:id', stuffCtrl.createFrais);
   
//recupération de tout les frais
router.get('/', stuffCtrl.toutFrais);



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