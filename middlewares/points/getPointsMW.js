/**
 * Load all points for a student from database, saves result to res.locals.points
 */
 const requireOption = require('../requireOption')


module.exports = function(objectrepository) {
    const PointModel = requireOption(objectrepository, 'PointModel')

    return function(req, res, next)  {
        if(typeof res.locals.student === 'undefined') 
            return next()
        
        PointModel.find({_gradeof: res.locals.student._id}, (err, points) => {
            if(err)
                return next(err)

            res.locals.studentpoints = points
            return next()
        })
    }
}