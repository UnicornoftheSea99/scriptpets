const Sequelize = require("sequelize")
const sequelize = require("../databaseconnection.js")
//https://www.geeksforgeeks.org/node-js-mysql-create-table-using-sequelize/?ref=rp
//https://dev.to/darshanbib/user-management-for-node-js-mysql-using-sequelize-and-passportjs-44kj

const Pet = sequelize.define("pet", {
  pet_id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false
    primaryKey:true
  },
  name: {type: Sequelize.STRING},
  happiness: {type: Sequelize.INTEGER},
  hunger: {type: Sequelize.INTEGER},
  health: {type: Sequelize.INTEGER},
  personality: {type:Sequelize.STRING},
  myDate: {type: Sequelize.DATE,
            defaultValue: Sequelize.NOW },
  createdAt:Sequelize.DATE
})
module.experts = Pet;
