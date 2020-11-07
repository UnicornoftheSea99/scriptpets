var Sequelize = require('sequelize-cockroachdb');
var fs = require('fs');


var sequelize = new Sequelize('scriptpets', 'maxroach', ''{
  dialect: 'postgres',
  port: 26257,
  logging: false,
  dialectOptions: {

  }
});
