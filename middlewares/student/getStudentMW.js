/**
 * Load a student from DB. The result is stored in res.locals.student
 */
const requireOption = require('../requireOption')

module.exports = function(objectrepository, session = false) {
    const StudentModel = requireOption(objectrepository, 'StudentModel')

    return function(req, res, next)  {
        const queryvalue = session ? req.session.userid : req.params.studentid
        StudentModel.findOne({_id: queryvalue}, (err, student) => {
            if(err || !student) {
                return next(err ? err : "hiba")
            }
            res.locals.student = student
            return next()
        })
    }
}