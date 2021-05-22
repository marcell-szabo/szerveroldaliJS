const Schema = require('mongoose').Schema
const db = require('../config/db')
const bcrypt = require('bcryptjs')

var TeacherUserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

TeacherUserSchema.pre('save', function(next) {
    const teacher = this;
    if(!teacher.isModified('password'))
        return next()
    bcrypt.genSalt(10, (err, salt) => {
        if(err)
            return next(err)
        bcrypt.hash(teacher.password, salt, (err, hash) => {
            if(err)
                return next(err)
            teacher.password = hash
            next()
        })
    })
})

TeacherUserSchema.methods.comparePassword = function(passwd, cb) {
    bcrypt.compare(passwd, this.password, (err, isMatch) => {
        if(err)
            return cb(err)
        cb(null, isMatch)
    })
}

module.exports = db.model('TeacherUser', TeacherUserSchema)
