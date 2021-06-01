/**
 * Loads all student from the DB. The result is stored in res.locals.students
 */
const requireOption = require('../requireOption')

module.exports = function(objectrepository) {

    const StudentModel = requireOption(objectrepository, 'StudentModel')

    return function(req, res, next)  {
        StudentModel.find({ _studentof: res.locals.myclass._id }, (err, students) => {
            if (err)
                return next(err)
            
            res.locals.students = students
            return next()
        })
    }
}