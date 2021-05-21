const requireOption = require('../requireOption')

module.exports = function(objectrepository) {
    const StudentModel = requireOption(objectrepository, 'StudentModel')
    return function(req, res, next)  {
        res.locals.who = 'student'
        if(req.method === 'GET') {
            return next()
        }
        StudentModel.findOne({ studentid: req.body.studentid }, (err, user) => {
            if(err)
                return next(err)
            if(user ==  null) {
                res.locals.errorlogin = 'nincs ilyen diak'
                return next()
            }
            user.comparePassword(req.body.password, (err, isMatch) => {
                if(err)
                    return next(err)
                if(!isMatch) {
                    res.locals.errorlogin = 'hibas jelszo'
                    return next()
                } else {
                    req.session.isloggedin = true
                    req.session.userid = user._id
                    req.session.teacher = false
                    return res.redirect('/points/' + user._id + '/')
                }
            })
        })
        

    }
}