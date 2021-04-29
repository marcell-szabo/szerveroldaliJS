/**
 * If user is authenticated call next, else: redirect to /
 */

module.exports = function(objectrepository) {
    return function(req, res, next)  {
        if(typeof req.session.isloggedin === 'undefined' || req.session.isloggedin !== true)
            res.redirect('/')
        else
            return next()
    }
}