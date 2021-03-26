/**
 * Update or save a point record to the DB.
 * If res.locals.point exists, the entity is updated, else it is created.
 * Redirects to /points/:studentid/ upon success
 */


module.exports = function(objectrepository) {
    return function(req, res, next)  {
        if(req.method == 'GET') 
        next()
        else {
            res.redirect('/points/' + res.locals.student._id + '/')
        }
    }
}