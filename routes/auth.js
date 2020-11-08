var authController = require('../controllers/authcontroller.js');
//https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537
module.exports = function(app, passport) {

    app.get('/register', authController.register);
    app.get('/login', authController.login);
    app.post('/register', passport.authenticate('local-register', {
      successRedirect: '/profile',
      failureRedirect: '/register'
    }))

    // app.post("/register", (req, res, next) => {
    //   console.log("Hello, World!")
    //   passport.authenticate('local-login', {
    //     successRedirect: '/profile',
    //     failureRedirect: '/register'
    //   })
    // })

    app.get('/profile', isLoggedIn, authController.profile);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
}
