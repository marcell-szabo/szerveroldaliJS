const requireOption = require('../requireOption')

module.exports = function(objectrepository) {
    const TeacherUserModel = requireOption(objectrepository, 'TeacherUserModel')

    return function(req, res, next)  {
        TeacherUserModel.findOne({_id: req.session.userid}, (err, user) => {
            if(err || !user) {
                return next(err ? err : "hiba")
            }
            res.locals.teacheruser = user
            return next()
        })
    }
}