const express = require('express')
const knex = require('./db/knex.js')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
  knex('technology').select('*').then(function(technologies){
    console.log(res.json(technologies));
    res.json(technologies);
  })
})

app.listen(port);
