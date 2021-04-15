/**
 * Deletes a point record from database.
 * Redirects to /points/:studentid
 */
 const requireOption = require('../requireOption')

module.exports = function(objectrepository) {
    const PointModel = requireOption(objectrepository, 'PointModel')

    return function(req, res, next)  {
        if(typeof res.locals.studentpoint === 'undefined')
            return next()
        res.locals.studentpoint.remove((err) => {
            if(err)
                return next(err)
            return res.redirect('/points/' + res.locals.student._id +'/')
        })
    }
}