/**
 * Loads a specific point record from database, using the :pointid parameter.
 * Result is saved to res.local.studentpoint
 */
 const requireOption = require('../requireOption')

module.exports = function(objectrepository) {
    const PointModel = requireOption(objectrepository, 'PointModel')

    return function(req, res, next)  {
        PointModel.findOne({_id: req.params.pointid, _gradeof: req.params.studentid}, (err, point) => {
            if(err || !point) 
                next(err ? err : 'hiba')
            res.locals.studentpoint = point
            return next()
        })
    }
}