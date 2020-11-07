const Sequelize = require("sequelize")
const sequelize = require("../databaseconnection.js")
//https://www.geeksforgeeks.org/node-js-mysql-create-table-using-sequelize/?ref=rp
//https://dev.to/darshanbib/user-management-for-node-js-mysql-using-sequelize-and-passportjs-44kj

const User = sequelize.define("user", {
  user_id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false
    primaryKey:true
  },
  name: {type: Sequelize.STRING},
  email: {type: Sequelize.STRING},
  myDate: {type: Sequelize.date,
            defaultValue: Sequelize.NOW },
  //MAKE SURE TO HASH PASSWORD: ANANDA
  password:
})
