const mongoose = require('mongoose');

const fraisSchema = mongoose.Schema({
  typeFrais: { type: String, required: true },
  montantFrais: { type: Number, required: true },
  libelleFrais: { type: String, required: true },
  dateInitialise: { type: String, required: true },
  preuveFrais: { type: String, required: true },
  // mission: [{
  //   idMission: {type: String },
  //   nomMission: {type: String },
  //   montantEstime: {type: Number }
  // }],
  // {timestamps: true}

});

module.exports = mongoose.model('Frais', fraisSchema);