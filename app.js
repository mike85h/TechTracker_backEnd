const express = require('express');
const knex = require('knex');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');

app.get('/', function(req, res){
  res.send("hello world");

  knex('technology').then(function(data){
    console.log(data);
  })
})

app.listen(port);
