/**
 * Checks password, if it matches then creates a session for user and redirets it to /students
 */

module.exports = function(objectrepository) {
    return function(req, res, next)  {
        if(typeof req.body.password == 'undefined') {
            next()
        } 
        if (req.body.username === 'admin' && req.body.password === 'admin'){
            req.session.isloggedin = true;
            req.session.userid = 1024;
            return res.redirect('/students/')
        }
        res.locals.errorlogin = 'hibas jelszo'
        return next()
    }
}