const authMW = require('../middlewares/auth/authMW')
const checkTeacherPassMW = require('../middlewares/auth/checkTeacherPassMW')
const checkStudentPassMW = require('../middlewares/auth/checkStudentPassMW')
const renderMW = require('../middlewares/renderMW')
const renderAJAXMW = require('../middlewares/renderAJAXMW')
const getPointsMW = require('../middlewares/points/getPointsMW')
const getPointMW = require('../middlewares/points/getPointMW')
const savePointMW = require('../middlewares/points/savePointMW')
const delPointMW = require('../middlewares/points/delPointMW')
const getStudentsMW = require('../middlewares/student/getStudentsMW')
const getStudentMW = require('../middlewares/student/getStudentMW')
const saveStudentMW = require('../middlewares/student/saveStudentMW')
const delStudentMW = require('../middlewares/student/delStudentMW')
const logoutMW = require('../middlewares/auth/logoutMW')
const getTeacherUserMW = require('../middlewares/teacheruser/getTeacherUserMW')
const getMyClass = require('../middlewares/class/getMyClassMW')
const saveMyClass = require('../middlewares/class/saveMyClassMW')


const StudentModel = require('../models/student')
const PointModel = require('../models/point')
const TeacherUserModel = require('../models/teacherUser')
const ClassModel = require('../models/class')
module.exports = function(app) {
    const objecRepository = {
        StudentModel: StudentModel,
        PointModel: PointModel,
        TeacherUserModel: TeacherUserModel,
        ClassModel: ClassModel
    }

    app.use('/students/new/',
        authMW(objecRepository),
        getTeacherUserMW(objecRepository),
        getMyClass(objecRepository),
        saveStudentMW(objecRepository),
        renderMW(objecRepository, 'form_student'))
        
    app.use('/students/edit/:studentid/',
        authMW(objecRepository),
        getTeacherUserMW(objecRepository),
        getMyClass(objecRepository),
        getStudentMW(objecRepository),
        saveStudentMW(objecRepository),
        renderMW(objecRepository, 'form_student'))

    app.get('/students/del/:studentid/',
        authMW(objecRepository),
        getStudentMW(objecRepository),
        delStudentMW(objecRepository))
        
    app.get('/students/',
        authMW(objecRepository),
        getTeacherUserMW(objecRepository),
        renderMW(objecRepository, 'class'))

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
        getStudentMW(objecRepository),
        getPointMW(objecRepository),
        delPointMW(objecRepository))

    app.use('/mypoints/', 
        authMW(objecRepository),
        getStudentMW(objecRepository, true),
        getPointsMW(objecRepository),
        renderMW(objecRepository, 'my_points'))

    app.get('/myclass/edit/',
        authMW(objecRepository),
        getTeacherUserMW(objecRepository),
        getMyClass(objecRepository),
        renderAJAXMW(objecRepository, 'myclass_edit'))

    app.post('/myclass/save/',
        authMW(objecRepository),
        getTeacherUserMW(objecRepository),
        getMyClass(objecRepository),
        saveMyClass(objecRepository),
        renderAJAXMW(objecRepository, 'myclassHEAD'))

    app.get('/myclass/',
        authMW(objecRepository),
        getTeacherUserMW(objecRepository),
        getMyClass(objecRepository),
        getStudentsMW(objecRepository),
        renderAJAXMW(objecRepository, 'myclassBODY'),
        renderMW(objecRepository, 'myclass'))

    app.use('/logout/', logoutMW(objecRepository))

    app.use('/teacherlogin/',
        checkTeacherPassMW(objecRepository),
        renderMW(objecRepository, 'login'))
    
    app.use('/studentlogin/',
        checkStudentPassMW(objecRepository),
        renderMW(objecRepository, 'login'))
    
    app.use('/', 
        renderMW(objecRepository, 'index'))
    
    
}