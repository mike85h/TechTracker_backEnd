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

// app.post('/', function(req, res){
//
//   console.log(req.body.name)
//   //populate object to insert into table
//   //let insert1 = {name: ??, type: ??, note: ??, examples: ??[], date: 0000-00-00}
//   //do the insertion
//   //knex('technology')
//     //.insert(insert1)
//     //.into("test")
//     //.then(function (id) {
//       //console.log(id);
//     //})
//     //.finally(function() {
//     //  knex.destroy();
//     //});
// })

// app.delete('/', function(req, res){
//   knex("technology")
//     .where("id", req.body.id)
//     .del()
//     .then(function (count) {
//       res.json(count);
//     }).finally(function () {
//       knex.destroy();
//     })
//
// })
module.exports = app
app.listen(port);
