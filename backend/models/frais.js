const mongoose = require('mongoose');

const fraisSchema = mongoose.Schema({
  typeFrais: { type: String, required: true },
  montantFrais: { type: Number, required: true },
  libelleFrais: { type: String, required: true },
  dateInitialise: { type: String, required: true },
  preuveFrais: { type: String, required: true },
  
});

module.exports = mongoose.model('Frais', fraisSchema);