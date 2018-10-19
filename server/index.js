const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const db = require('../database/index')
const router = require('./routes')


const app = express();
const port = 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use('/api', router)

app.listen(port, ()=> console.log(`connected to ${port}`))

