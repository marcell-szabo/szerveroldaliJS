const requireOption = require('../requireOption')

module.exports = function (objectrepository) {

    const ClassModel = requireOption(objectrepository, 'ClassModel')

    return function (req, res, next) {
        ClassModel.findOne({_head: res.locals.teacheruser._id}, (err, myclass) => {
            if (err)
                return next(err)
            if(myclass == null)
                return next()
            res.locals.myclass = myclass
            return next()
        })
    }
}