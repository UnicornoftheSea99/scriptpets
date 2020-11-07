var Sequelize = require('sequelize-cockroachdb');
var fs = require('fs');


var sequelize = new Sequelize('scriptpets', 'maxroach', ''{
  dialect: 'postgres',
  port: 26257,
  logging: false,
  dialectOptions: {
    ssl: {
               ca: fs.readFileSync('certs/ca.crt')
                   .toString(),
               key: fs.readFileSync('certs/client.maxroach.key')
                   .toString(),
               cert: fs.readFileSync('certs/client.maxroach.crt')
                   .toString()
           }//be very careful with this part. do not share CRTS. it will make our database insecure :(
      }
});

//this is our database connection
module.exports = sequelize
