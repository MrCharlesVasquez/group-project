const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7000


// * Middleware for every request
app.use(express.json())
app.use(morgan('dev'))


// * DB connection
mongoose.connect("mongodb://localhost:27017/vices-rewards", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => console.log("Connected to V/R DB"))
    .catch(err => console.log(err))


// * Routes
app.use("/api", expressJwt({ secret: process.env.SECRET }))

app.use("/auth", require('./routes/authRouter.js'))
app.use("/api/transactions", require('./routes/budgetRouter.js'))
app.use("/api/goals", require('./routes/goalRouter.js'))


// * Global Error Handling
app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

// * Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
