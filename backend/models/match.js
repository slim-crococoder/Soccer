// importer le dossier mongoose pour creation de la base de données
const mongoose = require('mongoose');
// matchSchema: ensemble des attribut de modele dans la base de données
const matchSchema = mongoose.Schema({
    // S mta3 string kbira 5ater ne5dmo fi dossier.js
    teamOne: String,
    scoreOne: String,
    teamTwo: String,
    scoreTwo: String,
    image: String //attribut pour image
});
// Match: nom de modele dans mla base de donnés 
const match = mongoose.model('Match', matchSchema);

// exportina les variable mta3 match bech ki njib 7aja mil front na3ref win nemchi
module.exports = match;