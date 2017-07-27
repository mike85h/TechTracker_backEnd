 var knex = require('knex')
 var configs = require('../knexfile')
 var environment = 'development'
 var dbconfig = configs[environment]

 module.exports = knex(dbconfig)
