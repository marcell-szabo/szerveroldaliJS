/**
 * Update or save a student to DB.
 * If res.locals.students exists, it is updated, else it is created
 * Redirects to /students upon success
 */
 const requireOption = require('../requireOption')

module.exports = function(objectrepository) {
    const StudentModel = requireOption(objectrepository, 'StudentModel')

    return function(req, res, next)  {
        if(req.method == 'GET') 
            return next()
        
        if (typeof res.locals.student === 'undefined')
            res.locals.student = new StudentModel()

        res.locals.student.firstname = req.body.firstname
        res.locals.student.lastname = req.body.lastname
        res.locals.student.address.street = req.body.street
        res.locals.student.address.city = req.body.city
        res.locals.student.address.zip = req.body.zip
        res.locals.student.email = req.body.email
        res.locals.student.studentid = req.body.studentid
        res.locals.student.class = req.body.class
        res.locals.student.password = req.body.firstname.charAt(0) + req.body.lastname.charAt(0) + req.body.studentid

        //validation
        if(req.body.firstname == '' ||
            req.body.lastname == '' ||
            req.body.class == '' ||
            req.body.studentid == '' ||
            req.body.email == '')
            return next()

        res.locals.student.save((err) => {
            if (err) {
                return next(err)
            }
            res.redirect('/students/')
        })       
    }
}