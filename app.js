const express = require('express')
var flash = require('connect-flash')
var app = express()
const path = require('path');
var session = require('express-session');
const petmodel = require('./databasemanage/pet.js')
const usermodel = require('./databasemanage/user.js')
const bodyParser = require('body-parser')
const passport = require('passport')

//body parser.
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//secret
// For Passport
app.use(session({secret: 'sessiondata here',resave: true,saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use(express.static(path.join(__dirname, 'public')));
//view engine: pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')
//css
app.use(express.static('./public/css'));
app.use(express.static(path.join(__dirname, '/public/img')));

//routes :prayer
app.get('/', function(req, res){
  res.render('login')
})
app.get('/adventure', function(req, res){
  res.render('adventure')
})
app.post('/profile', function(req, res){
  res.render('profile')
})
app.get('/create', function(req, res){
  res.render('create')
})
app.post('/create', function(req, res){
  //don't know if this works yet because haven't turned create.pug into form w/ post method.
  console.log(req.body.name, req.body.species)
  petmodel.create({
    name: req.body.name,
    happiness: 100,
    health: 100,
    personality: "Happy",
    species: req.body.species
  }).then(
    usermodel.findAll({where: {name: req.user.name}})
    .on('success', function(usermodel){
      if (usermodel){
        usermodel.update({
          pet: req.name
        })
      }
    })
  ).then(
    res.redirect('profile')
  )
})
var authRoute = require('./routes/auth.js')(app, passport);
require('./config/passport/passport.js')(passport, usermodel);
app.get('/profile', function(req, res){
  res.render('profile')
})

app.listen(5000, function(err){
    if (!err){
      console.log("server is now running on port 5000");
    }else{
      console.log(err);
    }
})
