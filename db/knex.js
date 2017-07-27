// const environment = process.env.NODE_ENV || 'development';
// const config = require('../knexfile.js')[environment];
//
// module.exports = require('knex')(config);


// var config      = require('../knexfile.js');
// var env         = process.env.NODE_ENV || 'development';
// var knex        = require('knex')(config[env]);
//
// module.exports = knex;
//
// knex.migrate.latest([config]);
 var knex = require('knex')
 var configs = require('../knexfile')
 var environment = 'development'
 var dbconfig = configs[environment]

 module.exports = knex(dbconfig)
