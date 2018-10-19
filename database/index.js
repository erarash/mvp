const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/database');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> console.log('connected to mongodb'))


const memeSchema =  mongoose.Schema({
    url: String,
    id: String
})

const meme = mongoose.model('meme', memeSchema)
