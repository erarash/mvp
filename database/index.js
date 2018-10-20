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

// client.search('gifs', {"q": query, "limit": 10})
//     .then((response) => {
//       response.data.forEach((gifObject) => {
//         console.log(gifObject.url)
//       })
//     })



  module.exports.Meme =  Meme 
  module.exports.db = db