var exports = module.exports = {}
pug = require('pug')
exports.signup = function(req, res) {

    res.render(pug.renderFile('signup'));

}
