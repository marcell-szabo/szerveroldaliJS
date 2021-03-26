/**
 * Loads all student from the DB. The result is stored in res.locals.students
 */



module.exports = function(objectrepository) {
    return function(req, res, next)  {
        res.locals.students = [
            {
                _id: 1,
                name: 'Minta Béla',
                class: '9/A',
                points: 100,
            },
            {
                _id: 2,
                name: 'Példa József',
                class: '10/B',
                points: 56,
            },
            {
                _id: 2,
                name: 'Am Erika',
                class: '7/C',
                points: 97,
            }
        ]
        next()
    }
}