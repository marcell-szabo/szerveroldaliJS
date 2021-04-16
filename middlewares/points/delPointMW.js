/**
 * Deletes a point record from database.
 * Redirects to /points/:studentid
 */
 const requireOption = require('../requireOption')

module.exports = function(objectrepository) {
    const PointModel = requireOption(objectrepository, 'PointModel')
    const StudentModel = requireOption(objectrepository, 'StudentModel')


    return function(req, res, next)  {
        if(typeof res.locals.studentpoint === 'undefined')
            return next()
        res.locals.studentpoint.remove((err) => {
            if(err)
                return next(err)
            StudentModel.updateOne({_id: res.locals.student._id}, {pointssum: res.locals.student.pointssum - res.locals.studentpoint.points}, (err, updateRes) => {
                if(err)
                    return next(err)
                return res.redirect('/points/' + res.locals.student._id + '/')
            })
        })
    }
}