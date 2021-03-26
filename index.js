var express = require('express')
var app = express()
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false}))
app.use(express.json())

app.use(express.static(__dirname + '/static'))

require('./route/routing.js')(app)

var server = app.listen(3000, function () {
    console.log("On: 3000")
})