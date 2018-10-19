// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });
//above is sample data of a search to giphy

const Meme  = require("../database/index")


const controller = {
    get: (req,res) => {
        console.log('d')
        Meme.Meme.find({})
        .then(data => res.status(200).send(data))
        .catch(err => console.error(err))
    },
    post: (req,res) => {
        
        const { url, id } = req.body;
        console.log(req.body, 'this is meme')
        Meme.Meme.create({ url, id })
        .then(data => {res.status(201).send(data)})
        .catch(err => console.error(err));
    }
}

module.exports = controller