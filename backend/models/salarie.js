const mongoose = require('mongoose');
// appel du package mongoose de validation d'unicité utilisé pour mail dans ce cas
const uniqueValidator = require('mongoose-unique-validator');

const salarieSchema = mongoose.Schema({
    nomSalarie:{type: String, required: true},
    emailSalarie:{ type: String, required: true, unique: true },
    motdepasse: { type: String, required: true}
});

salarieSchema.plugin(uniqueValidator);

module.exports = mongoose.model('salarie', salarieSchema);