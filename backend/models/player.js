const mongoose = require('mongoose');
// playerSchema: ensemble des attribut de modele dans la base de données
const playerSchema = mongoose.Schema({
    // S mta3 string kbira 5ater ne5dmo fi dossier.js
    nom: String,
    prenom: String,
    age: String,
    poste: String,
    image: String //attribut pour image
});
// Player: nom de modele dans mla base de donnés 
const player = mongoose.model('Player', playerSchema);

// exportina les variable mta3 player bech ki njib 7aja mil front na3ref win nemchi
module.exports = player;