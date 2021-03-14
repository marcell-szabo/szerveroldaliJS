/**
 * Update or save a student to DB.
 * If res.locals.students exists, it is updated, else it is created
 * Redirects to /students upon success
 */

const requireOption = require('../requireOption')

module.exports = function(objectrepository) {
    return function(req, res, next)  {
        next()
    }
}