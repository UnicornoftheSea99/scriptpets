var express = require('express')
var app = express()
const syncTables = require('./databasemanage/createtables.js')
app.set('view engine', 'pug')



app.get('/', function(req, res){
  res.send("hello world")
})


app.listen(5000, function(err){
    if (!err){
      console.log("things are working!");
    }else{
      console.log(err);
    }
}
app.listen(5000, function () {
      console.log("Listening on port " + this.address().port)
})
