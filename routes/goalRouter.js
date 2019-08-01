const express = require('express')
const goalRouter = express.Router()
const Goal = require('../models/goal.js')

// * Get ALl Goals by User
goalRouter.get("/", (req, res, next) => {
    Goal.find(
        { user: req.user._id }, 
        (err, goals) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(200).send(goals)
        }
    )
})

// * Get One Goal by User
// ! Feature not included in MVP, routes initialized if future updates require
goalRouter.get("/:_id", (req, res, next) => {
    Goal.findOne(
        { _id: req.params._id, user: req.user._id }, 
        (err, foundGoal) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!foundGoal){
                res.status(404)
                return next(new Error("No Goal item found"))
            }
            res.status(200).send(foundGoal)
        }
    )
})

// * Post (Add New Goal)
goalRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newGoal = new Goal(req.body)
    newGoal.save((err, savedGoal) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedGoal)
    })
})

// * Delete
goalRouter.delete("/:_id", (req, res, next) => {
<<<<<<< HEAD
    Goal.findOneAndRemove(
        { _id: req.params._id, user: req.user._id }, 
        (err, deletedGoal) => {
            if(err){
                res.status(500)
                return next(err)
=======
    Goal.findOneAndRemove({ _id: req.params._id }, (err, deletedGoal) => {
        if (err){
            res.status(500)
            return next (err)
        }
        return res.status(202).send(
            {
                goal: deletedGoal,
                msg: `Successfully deleted ${deletedGoal.goalName}.`
>>>>>>> master
            }
            return res.status(202).send(
                {
                    goal: deletedGoal,
                    msg: `Successfully deleted ${deletedGoal.goalName}.`
                }
            )
        }
    )
})

// * Put 
// ! feature not included in MVP - routes initialized if future updates require
goalRouter.put("/:_id", (req, res, next) => {
    Goal.findOneAndUpdate(
        { _id: req.params._id, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedGoal) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(201).send(updatedGoal)
        }
    )
})

module.exports = goalRouter