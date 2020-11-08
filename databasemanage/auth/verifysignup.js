const user = require('./models/user.js')

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "This username is already in use."
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "This email is already in use."
        });
        return;
      }

      next();
    });
  });
};


module.exports = checkDuplicateUsernameOrEmail;
