
//DANGEROUS TO RUN!

var Sequelize = require('sequelize-cockroachdb');
var fs = require('fs');
var sequelize = require('./databaseconnection.js')

const Pet = sequelize.define("pet", {
  pet_id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name: {type: Sequelize.STRING},
  happiness: {type: Sequelize.INTEGER},
  hunger: {type: Sequelize.INTEGER},
  health: {type: Sequelize.INTEGER},
  personality: {type:Sequelize.STRING},
  species: {type:Sequelize.STRING},
  myDate: {type: Sequelize.DATE,
            defaultValue: Sequelize.NOW },
  createdAt:Sequelize.DATE
})

const User = sequelize.define("user", {
  user_id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name: {type: Sequelize.STRING},
  email: {type: Sequelize.STRING},
  myDate: {type: Sequelize.DATE,
            defaultValue: Sequelize.NOW },
  //MAKE SURE TO HASH PASSWORD: ANANDA
  password: {type: Sequelize.STRING},
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  money:{type:Sequelize.INTEGER}
})

User.sync({
        force: true
})
Pet.sync({
  force:true
})
