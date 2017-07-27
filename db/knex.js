 var knex = require('knex')
 var configs = require('../knexfile')
 var environment = process.env.NODE_URL || 'development'
 var dbconfig = configs[environment]

 module.exports = knex(dbconfig)
