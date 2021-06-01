const requireOption = require('../requireOption')

module.exports = function (objectrepository) {

    const ClassModel = requireOption(objectrepository, 'ClassModel')

    return function (req, res, next) {
        if(typeof res.locals.myclass === 'undefined')
            res.locals.myclass = new ClassModel()
        console.log('kaki' + req.body.classname )
        res.locals.myclass.name = req.body.classname
        res.locals.myclass.startyear = req.body.startyear
        res.locals.myclass.finishyear = req.body.finishyear
        res.locals.myclass._head = res.locals.teacheruser._id
        res.locals.myclass.save((err) => {
            if(err)
                return next(err)
            return next()
        })

    }
}