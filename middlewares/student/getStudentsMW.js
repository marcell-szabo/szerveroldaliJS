/**
 * Loads all student from the DB. The result is stored in res.locals.students
 */
const requireOption = require('../requireOption')

module.exports = function(objectrepository) {

    const StudentModel = requireOption(objectrepository, 'StudentModel')

    return function(req, res, next)  {
        StudentModel.find({}, (err, students) => {
            if (err)
                return next(err)
            
            res.locals.students = students
            return next()
        })
    }
}