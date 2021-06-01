const requireOption = require('../requireOption')

module.exports = function (objectrepository) {
    const TeacherUserModel = requireOption(objectrepository, 'TeacherUserModel')
    return function (req, res, next) {
        res.locals.who = 'teacher'
        if (req.method === 'GET') {
            return next()
        }
        TeacherUserModel.findOne({username: req.body.username}, (err, user) => {
            if (err)
                return next(err)
            if (user == null) {
                res.locals.errorlogin = 'nincs ilyen felhasznalo'
                return next()
            }
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (err)
                    return next(err)
                if (!isMatch) {
                    res.locals.errorlogin = 'hibas jelszo'
                    return next()
                } else {
                    req.session.isloggedin = true;
                    req.session.userid = user._id;
                    req.session.teacher = true
                    return res.redirect('/students/')
                }
            })
        })
    }
}