/**
 * Load a student from DB. The result is stored in res.locals.student
 */
const requireOption = require('../requireOption')

module.exports = function(objectrepository) {
    const StudentModel = requireOption(objectrepository, 'StudentModel')

    return function(req, res, next)  {
        StudentModel.findOne({_id: req.params.studentid}, (err, student) => {
            if(err || !student) {
                return next(err ? err : "hiba")
            }
            res.locals.student = student
            return next()
        })
    }
}