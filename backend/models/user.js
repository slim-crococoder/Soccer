const mongoose = require('mongoose');
// matchSchema: ensemble des attribut de modele dans la base de données
const userSchema = mongoose.Schema({
    // S mta3 string kbira 5ater ne5dmo fi dossier.js
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    image: String //attribut pour image
});
// Match: nom de modele dans mla base de donnés 
const user = mongoose.model('User', userSchema);

// exportina les variable mta3 match bech ki njib 7aja mil front na3ref win nemchi
module.exports = user;