const authMW = require('../middlewares/auth/authMW')
const checkPassMW = require('../middlewares/auth/checkPassMW')
const renderMW = require('../middlewares/renderMW')
const getPointsMW = require('../middlewares/points/getPointsMW')
const getPointMW = require('../middlewares/points/getPointMW')
const savePointMW = require('../middlewares/points/savePointMW')
const delPointMW = require('../middlewares/points/delPointMW')
const getStudentsMW = require('../middlewares/student/getStudentsMW')
const getStudentMW = require('../middlewares/student/getStudentMW')
const saveStudentMW = require('../middlewares/student/saveStudentMW')
const delStudentMW = require('../middlewares/student/getStudentMW')

module.exports = function(app) {
    const objecRepository = {}

    app.use('/',
            checkPassMW(objecRepository), 
            renderMW(objecRepository, 'index'))
    app.get('/students/',
            authMW(objecRepository),
            getStudentsMW(objecRepository),
            renderMW(objecRepository, 'class'))
    app.use('/students/new/',
            authMW(objecRepository),
            saveStudentMW(objecRepository),
            renderMW(objecRepository, 'form_student'))
    app.use('/students/edit/:studentid/',
            authMW(objecRepository),
            getStudentMW(objecRepository),
            saveStudentMW(objecRepository),
            renderMW(objecRepository, 'form_student'))
    app.get('/students/del/:studentid/',
            authMW(objecRepository),
            getStudentMW(objecRepository),
            delStudentMW(objecRepository))
    app.get('/points/:studentid/',
            authMW(objecRepository),
            getStudentMW(objecRepository),
            getPointsMW(objecRepository),
            renderMW(objecRepository, 'student'))
    app.use('/points/:studentid/new/',
            authMW(objecRepository),
            getStudentMW(objecRepository),
            savePointMW(objecRepository),
            renderMW(objecRepository, 'form_points'))
    app.use('/points/:studentid/edit/:pointid/',
            authMW(objecRepository),
            getStudentMW(objecRepository),
            getPointMW(objecRepository),
            savePointMW(objecRepository),
            renderMW(objecRepository, 'form_points'))
    app.get('/points/:studentid/del/:pointid/',
            authMW(objecRepository),
            getPointMW(objecRepository),
            delPointMW(objecRepository))
}