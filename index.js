
const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false}))
app.use(express.json())

app.use(express.static(__dirname + '/static'))

require('./route/routing.js')(app)

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

const server = app.listen(3000, function () {
    console.log("On: 3000")
})