require('dotenv').config()
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connexion = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, console.log('connected!!!'))
        const db = mongoose.connection;
        console.log('connecté pour la premiere fois')
    }
    catch (e) { console.log(e) }
    // db.on('error', () => console.log('Erreur de connexion'))
    // db.once('open', () => console.log('connecté pour la premiere fois')
    // )
}

//models
//require('./Category');
module.exports = connexion