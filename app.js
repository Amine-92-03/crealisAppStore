const express = require('express');
const bodyParser = require("body-parser")
const app = express()


console.log('in app ...');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
require('dotenv').config()

app.get('/api',(req, res) =>{
    console.log('in app.get');
    return res.status(200).json({data : 1})
})

app.use(express.static('./frontend'));

module.exports = app