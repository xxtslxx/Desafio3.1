const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const routes = require('./src/routes')


const app = express()

mongoose.connect('mongodb://0.0.0.0:27017/ApiDonaMaria', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, function (err) {
       if (err) {
           console.log(err)
       } else {
           console.log("MongoDB Conected Sucess!!!")
       }
   })

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3000, function() {
    console.log("API LOJA DONA MARIA ONLINE!")
})