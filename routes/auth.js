var authController = require('../controllers/authcontroller.js');
//https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537
module.exports = function(app, passport) {

    app.get('/register', authController.register);
    app.get('/login', authController.login);
    app.post('/register', passport.authenticate('local-register',{
            successRedirect: '/create',
            failureRedirect: '/registererror'
            }
          ));


    app.get('/registererror', function(req,res) {
        console.log(":(");
        res.redirect('/register');
    });


    app.get('/profile', isLoggedIn, authController.profile);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/adventure',
        failureRedirect: '/login'
      }
    ));
}
