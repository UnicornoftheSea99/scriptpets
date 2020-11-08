var bCrypt = require('bcrypt-nodejs');
var User = require('./../../databasemanage/user.js')
var passport = require('passport')
module.exports = function(passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
          var generateHash = function(password) {

              return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

          };
          User.findOne({
            where: {
              email:email,
            }
          }).then(function(user){
            if (user){
              return done(null, false, {
                message:"That email is already taken."
              });
            }else {
              var userPassword = generateHash(password);
              var data = {
                email: email,
                password: userPassword,
                name:req.body.name,
                money:20
              };
              User.create(data).then(function(newUser, created){
                if (!newUser){
                  return done(null, false)
                }
                if (newUser){
                  return done(null, newUser)
                }
              })
            }
          })
        }
    ));

}

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
        if (user) {
            done(null, user.get());

        } else {
            done(user.errors, null);
        }
    });
});
