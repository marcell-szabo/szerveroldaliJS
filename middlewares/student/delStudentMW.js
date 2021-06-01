/**
 * Deletes a student from DB
 * Redirects to /students
 */
 const requireOption = require('../requireOption')


module.exports = function(objectrepository) {
    const StudentModel = requireOption(objectrepository, 'StudentModel')
    const PointModel = requireOption(objectrepository, 'PointModel')

    return function(req, res, next)  {
        if(typeof res.locals.student === 'undefined')
            return next()
        res.locals.student.remove((err) => {
            if(err) 
                return next(err)
            PointModel.deleteMany({_gradeof: res.locals.student._id}, (err, delres) => {
                if(err)
                    next(err)
                    return res.redirect('/myclass/')
            })
        })
    }
}