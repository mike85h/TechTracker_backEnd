const express = require('express')
const knex = require('./db/knex.js')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors')

app.use(cors())

app.get('/', function(req, res){
  knex('technology').select('*').then(function(technologies){
    res.json(technologies);
  })
})

app.listen(port);
