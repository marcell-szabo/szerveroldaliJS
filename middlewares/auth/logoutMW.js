module.exports = function(objectrepository) {
    return function(req, res, next)  {
        req.session.isloggedin = false
        req.session.destroy(err => {
            res.redirect('/')
        })
    }
}