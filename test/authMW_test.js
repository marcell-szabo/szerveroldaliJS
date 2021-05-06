const expect = require('chai').expect
const authMW = require('../middlewares/auth/authMW')

describe('authenticate middleware', function() {
    it("if res.session.isloggedin exists and it is false, next should be called ", function(done) {
        const mw = authMW({})
        mw({
            session: {
                isloggedin: true
            }
        },{}, () => {
            done()
        })
    })
    it("if res.session.isloggedin exists and it is true, redirect to /", function(done) {
        const mw = authMW({})
        const res_mock = {
            redirect: (s) => {
                expect(s).to.be.eql('/')
                done()
            }
        }
        mw({
            session: {
                isloggedin: false
            }
        },res_mock, () => {
        })
    })
    it("if res.session.isloggedin does not exist, redirect to /", function(done) {
        const mw = authMW({})
        const res_mock = {
            redirect: (s) => {
                expect(s).to.be.eql('/')
                done()
            }
        }
        mw({
            session: {}
        },res_mock, () => {
        })
    })

})