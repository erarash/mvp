const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const meme = require('../database/index')

const app = express();
const port = 3000;
app.use(morgan('dev'));
app.use(express.static(__dirname + '../client/dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.listen(port, ()=> console.log(`connected to ${port}`))