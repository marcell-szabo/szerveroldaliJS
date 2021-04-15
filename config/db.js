const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/laupqq', { useNewUrlParser: true, useUnifiedTopology: true },(err) => { if(err) {console.log("databaseerror")}})

module.exports = mongoose