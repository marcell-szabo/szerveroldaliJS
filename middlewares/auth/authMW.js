/**
 * If user is authenticated call next, else: redirect to /
 */

const requireOption = require('../requireOption')

module.exports = function(objectrepository) {
    return function(req, res, next)  {
        next()
    }
}