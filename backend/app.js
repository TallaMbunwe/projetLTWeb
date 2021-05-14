const express = require('express');// installation du framework express pour le serveur node
const bodyParser = require('body-parser');//installation de dépendance pour extraire l'objet JSON de la demande
const mongoose = require('mongoose');//package d'interaction avec la BD MongoDB

const app = express();

const stuffRoutes =require ('./routes/stuff');
//importation des routes de salarie
const salarieRoutes = require ('./routes/salarie');

//WCgrWYmXgzFz992/
mongoose.connect('mongodb+srv://libosso_21:Tall@dmin.@cluster0.tdbcv.mongodb.net/<dbname>?retryWrites=true&w=majority',

  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
 

// Cross Origin Ressource Sharing. 
// Permission d'accés à l'API backend de n'importe quel origine

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json()); // modifier et retourner le corps des requettes en JSON

app.use('/api/stuff', stuffRoutes); //importation des routes via stuffRoutes 
app.use('/api/auth', salarieRoutes); //appel des routes vers le salarié
module.exports = app;