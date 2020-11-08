var express = require('express.js')
var app = express()

app.get('/', req, res){
  res.send("hello world")
}


app.listen(5000, function(err){
  if (!err){
    console.log("things are working!");
  }else{
    console.log(err);
  }
})
