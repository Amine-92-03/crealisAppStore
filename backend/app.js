const express = require('express');
const bodyParser = require("body-parser")
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('dotenv').config()
app.use(express.static('../frontend'));
module.exports = app