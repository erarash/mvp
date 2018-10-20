const Meme = require("../database/index")
const client = require('../giphy')



const controller = {
    get: (req, res) => {
        client.search('gifs', { "q": req.query.term, "limit": 3 })

            .then(({ data }) => {
                res.status(200).send(data)
            })
    },
    post: (req, res) => {

        const { url, id } = req.body;
        Meme.Meme.create({ url, id })
            .then(data => { res.status(201).send(data) })
            .catch(err => console.error(err));
    }
}

module.exports = controller