const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

// * Create New User (Sign-up)
authRouter.post('/signup', (req, res, next) => {
    User.findOne(
        { username: req.body.username}, 
        (err, user) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(user){
                res.status(400)
                return next(new Error("Username already exists"))
            }
            const newUser = new User(req.body)
            newUser.save((err, savedUser) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
                return res.status(201).send({ token, user: savedUser.withoutPassword() })
            })
        }
    )
})

// * Login 
authRouter.post('/login', (req, res, next) => {
    User.findOne(
        { username: req.body.username.toLowerCase() },
        (err, user) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!user || user.password !== req.body.password){
                res.status(403)
                return next(new Error("Username or Password are incorrect"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ token, user: user.withoutPassword() })
        }
    )
})

module.exports = authRouter