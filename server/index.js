const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const db = require('../database/index')
const router = require('./routes')


const app = express();
const port = 3000;

app.use(express.static(__dirname + '../client/dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/api', router)

app.listen(port, ()=> console.log(`connected to ${port}`))

