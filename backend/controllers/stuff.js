const Frais = require('../models/frais');

exports.createFrais = (req, res, next) => {
    delete req.body._id;
    const frais = new Frais({
      ...req.body
    });
    frais.save()
      .then(() => res.status(201).json({ message: 'Frais enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.modifierFrais = (req, res, next) => {
    Frais.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Frais modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimerFrais = (req, res, next) => {
    Frais.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Frais supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.chercherFrais = (req, res, next) => {
    Frais.findOne({ _id: req.params.id })
      .then(frais => res.status(200).json(frais))
      .catch(error => res.status(404).json({ error }));
  };

  exports.toutFrais = (req, res, next) => {
    Frais.find()
      .then(toutfrais => res.status(200).json(toutfrais))
      .catch(error => res.status(400).json({ error }));
  };