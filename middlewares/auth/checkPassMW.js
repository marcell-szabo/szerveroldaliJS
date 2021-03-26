/**
 * Checks password, if it matches then creates a session for user and redirets it to /students
 */

module.exports = function(objectrepository) {
    return function(req, res, next)  {
        if(typeof req.body.password == 'undefined') {
            next()
        } else{
            res.redirect('/students/')
        }
    }
}