// imoprter express module
const express = require('express');

// create backend application 
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//importina match model mil models/match.js
const Match = require('./models/match');
const User = require('./models/user');
const Player = require('./models/player');
const Stadium = require('./models/stadium');



// import mongoose module
const mongoose = require('mongoose');
// path :il me donne la possibilté d'ajouter dans un dossier specifique
const path = require('path');
const multer = require('multer');

// configuration des path pour ajout de l'image
app.use('/images', express.static(path.join('backend/images')))

// connect application to db si elle existe ou creation de DB de et on change le nom test par le nom de la base de donnée
mongoose.connect('mongodb://localhost:27017/soccerDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    // define file name
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


// MATCH

//  / slach heya: http://localhost:3000/
// jena request 3al all matches
app.get('/allMatches', (req, res) => {
    // c'est le traitement ici
    console.log('am here');
    // connect to db and get all matches
    Match.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            // reponse de serveur lil front end
            res.status(200).json({
                message: 'here all objects',
                matches: docs
            });
        }

    });


});


app.post('/addMatch', multer({ storage: storage }).single('image'), (req, res) => {
    // c'est le traitement ici
    console.log(' here adding');
    url = req.protocol + '://' + req.get('host');
    // creation d'un objet pour inserer dans la base de donnée
    const match = new Match({
            scoreOne: req.body.scoreOne,
            scoreTwo: req.body.scoreTwo,
            teamOne: req.body.teamOne,
            teamTwo: req.body.teamTwo,
            image: url + '/images/' + req.file.filename
        })
        // nsejlo l'objet mta3na
    match.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added successfuly',
            })
        }
    });
});

app.delete('/deleteMatch/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in delete', req.params.id);
    Match.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'delete successfully'
                })

            }
        }
    )
});

app.get('/displayMatch/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in get', req.params.id);
    // Match.findOne : 9olnelo lawej 
    Match.findOne({ _id: req.params.id }).then(
        data => {
            // if data existe
            if (data) {
                res.status(200).json({
                    match: data
                })
            }
        }
    )

});

app.put('/editMatch/:id', (req, res) => {
    console.log('here in edit', req.params.id);
    const match = new Match({
            _id: req.body._id,
            scoreOne: req.body.scoreOne,
            scoreTwo: req.body.scoreTwo,
            teamOne: req.body.teamOne,
            teamTwo: req.body.teamTwo,
        })
        // fonction update mche lawej 3al id ili 3ando req.params.id w 3awdho bil match
    Match.update({ _id: req.params.id }, match).then(
        // ba3d meya3mil modification l base de données tolik ahawa resultat 
        result => {
            if (result) {
                res.status(200).json({
                    message: 'update successfully'
                })
            }
        }
    )
});
// app.post('/addMatch', (req, res) => {
//     // c'est le traitement ici
//     console.log(' here adding');

// });


// USER

// jena request 3al all users

app.get('/allUsers', (req, res) => {
    // c'est le traitement ici
    console.log('am here');
    // connect to db and get all matches
    User.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            // reponse de serveur lil front end
            res.status(200).json({
                message: 'here all users',
                users: docs
            });
        }

    });


});

app.post('/addUser', multer({ storage: storage }).single('image'), (req, res) => {
    // c'est le traitement ici
    console.log(' here adding');
    url = req.protocol + '://' + req.get('host');
    // creation d'un objet pour inserer dans la base de donnée
    const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            pwd: req.body.pwd,
            image: url + '/images/' + req.file.filename
        })
        // nsejlo l'objet mta3na
    user.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'user added successfuly',
            })
        }
    });
});

app.delete('/deleteUsers/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in delete', req.params.id);
    User.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'delete successfully'
                })

            }
        }
    )
});

app.get('/displayUser/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in get', req.params.id);
    // Match.findOne : 9olnelo lawej 
    User.findOne({ _id: req.params.id }).then(
        data => {
            // if data existe
            if (data) {
                res.status(200).json({
                    user: data
                })
            }
        }
    )

});

app.put('/editUser/:id', (req, res) => {
    const user = new User({
        // meynejem ysob ken bil identifiant
        _id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: req.body.pwd,
        confirmPwd: req.body.confirmPwd
            // image: url + '/images/' + req.file.filename
    });

    console.log('edited object user', user);
    // fonction update mche lawej 3al id ili 3ando req.params.id w 3awdho bil match
    User.update({ _id: req.params.id }, user).then(
        // ba3d meya3mil modification l base de données tolik ahawa resultat 
        result => {
            if (result) {
                res.status(200).json({
                    message: 'update successfully'
                })
            }
        }
    )
});


//PLAYER

// jena request 3al all players
app.get('/allPlayers', (req, res) => {
    // c'est le traitement ici
    console.log('am here');
    // connect to db and get all matches
    Player.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            // reponse de serveur lil front end
            res.status(200).json({
                message: 'here all players',
                players: docs
            });
        }

    });


});

app.post('/addPlayers', multer({ storage: storage }).single('image'), (req, res) => {
    // c'est le traitement ici
    console.log(' here adding');
    url = req.protocol + '://' + req.get('host');
    // creation d'un objet pour inserer dans la base de donnée
    const player = new Player({
            nom: req.body.nom,
            prenom: req.body.prenom,
            age: req.body.age,
            poste: req.body.poste,
            image: url + '/images/' + req.file.filename
        })
        // nsejlo l'objet mta3na
    player.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added successfuly',
            })
        }
    });
});

app.delete('/deletePlayers/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in delete', req.params.id);
    Player.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'delete successfully'
                })

            }
        }
    )
});

app.get('/displayPlayers/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in get', req.params.id);
    // Match.findOne : 9olnelo lawej 
    Player.findOne({ _id: req.params.id }).then(
        data => {
            // if data existe
            if (data) {
                res.status(200).json({
                    player: data
                })
            }
        }
    )

});

app.put('/editPlayer/:id', (req, res) => {
    console.log('here in edit', req.params.id);
    const player = new Player({
            _id: req.body._id,
            nom: req.body.nom,
            prenom: req.body.prenom,
            age: req.body.age,
            poste: req.body.poste,
        })
        // fonction update mche lawej 3al id ili 3ando req.params.id w 3awdho bil match
    Player.update({ _id: req.params.id }, player).then(
        // ba3d meya3mil modification l base de données tolik ahawa resultat 
        result => {
            if (result) {
                res.status(200).json({
                    message: 'update successfully'
                })
            }
        }
    )
});

app.post('/login', (req, res) => {

    console.log('req body', req.body); //req.body:bech taffichilna email et pwd
    User.find({ email: req.body.email, pwd: req.body.pwd }).then(
        data => {
            console.log('finded user', data);
            res.status(200).json({
                user: data
            })
        }

    );
});

app.get('/api/search/:term', (req, res) => {
    console.log('req.body', req.body);
    console.log('req.params', req.params.term);
    Match.find({ teamOne: req.params.term }).then(
        result => {
            console.log('Here searched result', result);
            if (result) {
                res.send(result);
            }
        }
    )
});

//STADIUM

app.get('/allStadiums', (req, res) => {
    // c'est le traitement ici
    console.log('here stadium');
    // connect to db and get all matches
    Stadium.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            // reponse de serveur lil front end
            res.status(200).json({
                message: 'here all stadium',
                stadiums: docs
            });
        }

    });


});

app.delete('/deleteStadium/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in delete', req.params.id);
    Stadium.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'delete successfully'
                })

            }
        }
    )
});

app.post('/addStadium', (req, res) => {
    // c'est le traitement ici
    console.log(' here adding');
    url = req.protocol + '://' + req.get('host');
    // creation d'un objet pour inserer dans la base de donnée
    const stadium = new Stadium({
            name: req.body.name,
            country: req.body.country,
            capacity: req.body.capacity,


        })
        // nsejlo l'objet mta3na
    stadium.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added successfuly',
            })
        }
    });
});

app.get('/displayStadium/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in get', req.params.id);
    // Match.findOne : 9olnelo lawej 
    Stadium.findOne({ _id: req.params.id }).then(
        data => {
            // if data existe
            if (data) {
                res.status(200).json({
                    stadium: data
                })
            }
        }
    )

});

app.put('/editStadium/:id', (req, res) => {
    console.log('here in edit', req.params.id);
    const stadium = new Stadium({
            _id: req.body._id,
            name: req.body.name,
            country: req.body.country,
            capacity: req.body.capacity,

        })
        // fonction update mche lawej 3al id ili 3ando req.params.id w 3awdho bil match
    Stadium.update({ _id: req.params.id }, stadium).then(
        // ba3d meya3mil modification l base de données tolik ahawa resultat 
        result => {
            if (result) {
                res.status(200).json({
                    message: 'update successfully'
                })
            }
        }
    )
});



module.exports = app;