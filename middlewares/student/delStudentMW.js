/**
 * Deletes a student from DB
 * Redirects to /students
 */
 const requireOption = require('../requireOption')


module.exports = function(objectrepository) {
    const StudentModel = requireOption(objectrepository, 'StudentModel')

    return function(req, res, next)  {
        if(typeof res.locals.student === 'undefined')
            return next()
        // TODO: remove points also
        res.locals.student.remove((err) => {
            if(err) 
                return next(err)
            
            return res.redirect('/students/')
        })
    }
}