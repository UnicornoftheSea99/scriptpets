const express = require('express')
var app = express()
const path = require('path');
const petmodel = require('./databasemanage/models/pet.js')
const usermodel = require('./databasemanage/models/user.js')
const bodyparser = require('bodyparser')

app.set('views', 'views', path.join(__dirname, 'public'));
app.set('view engine', 'pug')



app.get('/', function(req, res){
  res.send("hello world")
})


app.listen(5000, function(err){
    if (!err){
      console.log("server is now running on port 5000");
    }else{
      console.log(err);
    }
})

app.listen(5000, function () {
      console.log("Listening on port " + this.address().port)
})
