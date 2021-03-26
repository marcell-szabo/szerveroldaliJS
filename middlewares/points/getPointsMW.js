/**
 * Load all points for a student from database, saves result to res.locals.points
 */


module.exports = function(objectrepository) {
    return function(req, res, next)  {
        res.locals.points = [
            {
                _id: 1,
                task: "Test",
                points: 5,
                date: "1/1/2021",
                description: "Human Biology Exam"
            },
            {
                _id: 2,
                task: "Homework",
                points: 3,
                date: "5/3/2021",
                description: "Plants Presentation"
            },
        ]
        next()
    }
}