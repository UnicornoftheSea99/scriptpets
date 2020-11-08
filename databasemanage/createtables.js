
//DANGEROUS TO RUN!

var Sequelize = require('sequelize-cockroachdb');
var fs = require('fs');
var sequelize = require('./databaseconnection.js')
var Pet = require("./pet.js")
var User = require("./user.js")
function syncTables(){
  User.sync({
          force: true
  })
  Pet.sync({
    force:true
  })
}
syncTables()
module.exports = syncTables
