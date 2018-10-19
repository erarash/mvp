const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/database');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> console.log('connected to mongodb'))


const memeSchema =  new mongoose.Schema({
    url: String,
    id: String
})

const Meme = mongoose.model('Meme', memeSchema)



  module.exports.Meme =  Meme 
  module.exports.db = db