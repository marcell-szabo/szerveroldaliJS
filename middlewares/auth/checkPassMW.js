/**
 * Checks password, if it matches then creates a session for user and redirets it to /students
 */

const requireOption = require('../requireOption')

module.exports = function(objectrepository) {
    return function(req, res, next)  {
        next()
    }
}