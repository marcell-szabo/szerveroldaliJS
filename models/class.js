const Schema = require('mongoose').Schema
const db = require('../config/db')

var Class = db.model('Class', {
    name: {type: String, required: true},
    type: String,
    startyear: Number,
    finishyear: Number,
    subject: String,
    _teacher: {type: Schema.Types.ObjectId, ref: 'TeacherUser'},
    _head: {type: Schema.Types.ObjectId, ref: 'TeacherUser'}
})

module.exports = Class