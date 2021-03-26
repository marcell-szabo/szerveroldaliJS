/**
 * Loads a specific point record from database, using the :pointid parameter.
 * Result is saved to res.local.studentpoint
 */

module.exports = function(objectrepository) {
    return function(req, res, next)  {
        res.locals.studentpoint = {
            _id: 1,
            task: "Test",
            points: 5,
            date: "2021-01-03",
            description: "Human Biology Exam"
        }
        next()
    }
}