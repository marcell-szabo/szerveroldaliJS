/**
 * Load a student from DB. The result is stored in res.locals.student
 */

module.exports = function(objectrepository) {
    return function(req, res, next)  {
        res.locals.student = {
                _id: 1,
                firstname: 'Béla',
                lastname: 'Minta',
                studentid: 123456,
                street: 'Fo u 45',
                city: 'Budapet',
                zip: 1234,
                email: 'mintabela@gmail.com',
                class: '9/A',
                points: 100,
            }
        next()
    }
}