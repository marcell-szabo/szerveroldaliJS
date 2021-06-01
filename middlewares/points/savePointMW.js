/**
 * Update or save a point record to the DB.
 * If res.locals.point exists, the entity is updated, else it is created.
 * Redirects to /points/:studentid/ upon success
 */
 const requireOption = require('../requireOption')


module.exports = function(objectrepository) {
    const PointModel = requireOption(objectrepository, 'PointModel')
    const StudentModel = requireOption(objectrepository, 'StudentModel')

    return function(req, res, next)  {
        if(req.method === 'GET' )
            return next()

        if (typeof res.locals.studentpoint === 'undefined') {
            res.locals.studentpoint = new PointModel()
            var isNew = true
        } else 
            var actualpoint = res.locals.studentpoint.points

        res.locals.studentpoint.task = req.body.task
        res.locals.studentpoint.points = req.body.point
        res.locals.studentpoint.date = req.body.date
        res.locals.studentpoint.description = req.body.description
        res.locals.studentpoint._gradeof = res.locals.student._id

        //validation
        if(req.body.task === '' ||
            req.body.point === '' ||
            req.body.date === ''  ||
            req.body.description === '')
            return next()
        
        res.locals.studentpoint.save((err) => {
            if (err) {
                return next(err)
            }
            
            //updates total points for student in database
            var updatevalue = isNew ? res.locals.student.pointssum + res.locals.studentpoint.points : res.locals.student.pointssum - actualpoint + res.locals.studentpoint.points
            StudentModel.updateOne({_id: res.locals.student._id}, {pointssum: updatevalue}, (err, updateRes) => {
                if(err)
                    return next(err)
                return res.redirect('/points/' + res.locals.student._id + '/')
            })
        })      
    }
}