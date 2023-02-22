require('dotenv').config()

const express = require("express")
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log("connected to database"))

const subscriberRouter = require('./routers/subscribers')
app.use('/subscribers', subscriberRouter)

app.listen(3000, () => console.log("server started"))

//tteste