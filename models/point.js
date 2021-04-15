const Schema = require('mongoose').Schema
const db = require('../config/db')

var Point = db.model('Point', {
    task: String,
    points: Number,
    date: Date,
    description: String,
    _gradeof: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }
})

module.exports = Point