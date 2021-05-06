const expect = require('chai').expect
const getStudentMW = require('../middlewares/student/getStudentMW')

describe('getStudent middleware', function() {
    it('should get student from db and initialize res.locals.student with the recovered student', function(done) {
        const ID = '5'; const MOCKSTUDENT = 'mockstudent'
        const mw = getStudentMW({
            StudentModel:{
                findOne: (p, cb) => {
                    expect(p).to.be.eql({_id: ID})
                    cb(null, MOCKSTUDENT)
                }
            }
        })
        let res_mock = {
            locals: {}
        }
        mw({
            params: {
                studentid: ID
            }
        },res_mock, () => {
            expect(res_mock.locals).to.be.eql({student: MOCKSTUDENT})
            done()
        })
    })
    it('should call next because of db error', function(done) {
        const ID = '5'; const ERROR = 'db_error'
        const mw = getStudentMW({
            StudentModel:{
                findOne: (p, cb) => {
                    expect(p).to.be.eql({_id: ID})
                    cb(ERROR, null)
                }
            }
        })
        let res_mock = {
            locals: {}
        }
        mw({
            params: {
                studentid: ID
            }
        },res_mock, (err) => {
            expect(err).to.be.eql(ERROR)
            done()
        })
    })
    it('should call next because student does not exists in db', function(done) {
        const ID = '5'; const MOCKSTUDENT = 'mockstudent'
        const mw = getStudentMW({
            StudentModel:{
                findOne: (p, cb) => {
                    expect(p).to.be.eql({_id: ID})
                    cb(undefined, null)
                }
            }
        })
        let res_mock = {
            locals: {}
        }
        mw({
            params: {
                studentid: ID
            }
        },res_mock, (err) => {
            expect(err).to.be.eql('hiba')
            expect(res_mock.locals).to.be.eql({})
            done()
        })
    })
})