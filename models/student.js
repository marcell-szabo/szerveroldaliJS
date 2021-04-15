const Schema = require('mongoose').Schema
const db = require('../config/db')

var Student = db.model('Student', {
    firstname: String,
    lastname: String,
    studentid: Number,
    address: {
        street: String,
        city: String,
        zip: Number
    },
    email: String,
    class: String,
    pointssum: {type: Number, default: 0}
})

module.exports = Student