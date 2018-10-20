const router = require('express').Router();
const controller = require("./controller")

router.route('/memes')
.get(controller.get)
.post(controller.post)

module.exports = router;