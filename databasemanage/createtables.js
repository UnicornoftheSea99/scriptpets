
//DANGEROUS TO RUN!

var Sequelize = require('sequelize-cockroachdb');
var fs = require('fs');
var sequelize = require('./models/databaseconnection.js')
var Pet = require("./models/pet.js")
var User = require("./models/user.js")
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
