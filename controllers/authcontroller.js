var exports = module.exports = {}
exports.register = function(req, res) {

    res.render('register.pug');

}
exports.login = function(req, res) {

    res.render('login');

}
