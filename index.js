
const express = require('express')
const fs = require('fs')
const https = require('https')
const session = require('express-session')

const privatekey = fs.readFileSync(__dirname + '/sslcert/key.pem')
const certificate = fs.readFileSync(__dirname + '/sslcert/cert.pem') 

const app = express()
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false}))
app.use(express.json())

app.use(express.static(__dirname + '/static'))

app.use(session({
    secret: 'soverysecurecookie',
    resave: 'false',
    saveUninitialized: 'false',
    secure: 'true'
}))

require('./route/routing.js')(app)

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

const server = https.createServer({key: privatekey, cert: certificate}, app)
server.listen(3000, () => {
    console.log("On: 3000")
}) 
