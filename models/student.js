const Schema = require('mongoose').Schema
const db = require('../config/db')
const bcrypt = require('bcryptjs')


var StudentSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    studentid: {type: String, required: true},
    address: {
        street: String,
        city: String,
        zip: Number
    },
    email: {type: String, required: true},
    class: {type: String, required: true},
    pointssum: {type: Number, default: 0},
    password: {type: String,  required: true }
})

StudentSchema.pre('save', function(next) {
    const student = this;
    if(!student.isModified('password'))
        return next()
    bcrypt.genSalt(10, (err, salt) => {
        if(err)
            return next(err)
        bcrypt.hash(student.password, salt, (err, hash) => {
            if(err)
                return next(err)
            student.password = hash
            next()
        })
    })
})

StudentSchema.methods.comparePassword = function(passwd, cb) {
    bcrypt.compare(passwd, this.password, (err, isMatch) => {
        if(err) 
            return cb(err)
        cb(null, isMatch)
    })
}

module.exports = db.model('Student', StudentSchema)