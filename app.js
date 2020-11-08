const express = require('express')
var app = express()
const path = require('path');
var session = require('express-session');
const petmodel = require('./databasemanage/pet.js')
const usermodel = require('./databasemanage/user.js')
const bodyParser = require('body-parser')
const passport = require('passport')

//secret
app.use(session({ secret: 'Encryption Key 39573957afjkdlasfj',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//body parser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
//view engine: pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')


//routes :prayer
app.get('/', function(req, res){
  res.render('login')
})
app.get('/profile', function(req, res){
  res.render('profile')
})
app.get('/adventure', function(req, res){
  res.render('adventure')
})

var authRoute = require('./routes/auth.js')(app, passport);
require('./config/passport/passport.js')(passport, usermodel);

app.listen(5000, function(err){
    if (!err){
      console.log("server is now running on port 5000");
    }else{
      console.log(err);
    }
})
