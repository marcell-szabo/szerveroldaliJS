module.exports = function(objectrepository, viewName) {
    return function(req, res, next)  {
        if(!req.xhr)
            return next()
        console.log('valami')
        return res.send(res.render(viewName, res.locals))
    }
}