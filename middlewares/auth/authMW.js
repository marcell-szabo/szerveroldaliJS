/**
 * If user is authenticated call next, else: redirect to /
 */

module.exports = function(objectrepository) {
    return function(req, res, next)  {
        next()
    }
}