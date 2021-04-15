/**
 * Update or save a point record to the DB.
 * If res.locals.point exists, the entity is updated, else it is created.
 * Redirects to /points/:studentid/ upon success
 */
 const requireOption = require('../requireOption')


module.exports = function(objectrepository) {
    const PointModel = requireOption(objectrepository, 'PointModel')

    return function(req, res, next)  {
        if(req.method == 'GET' ||
            (req.body.task == '') ||
            (req.body.point == '') ||
            (req.body.date == '') ||
            (req.body.description == '')) 
            return next()
    
        if (typeof res.locals.studentpoint === 'undefined') 
            res.locals.studentpoint = new PointModel()
    
        res.locals.studentpoint.task = req.body.task
        res.locals.studentpoint.points = req.body.point
        console.log(req.body.date)
        //TODO: date fix
        res.locals.studentpoint.date = req.body.date
        res.locals.studentpoint.description = req.body.description
        res.locals.studentpoint._gradeof = res.locals.student._id

        res.locals.studentpoint.save((err) => {
            if (err) {
                return next(err)
            }
            res.redirect('/points/' + res.locals.student._id + '/')
        })      
    }
}