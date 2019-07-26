const express = require('express')
const goalRouter = express.Router()
const Goal = require('../models/goal.js')

// * Get ALl Goals
goalRouter.get("/", (req, res, next) => {
    Goal.find((err, goals) => {
        if (err){
            res.status(500)
            return next (err)
        }
        res.status(200).send(goals)
    })
})

// * Get One Goal
goalRouter.get("/:_id", (req, res, next) => {
    Goal.findOne({ _id: req.params._id }, (err, foundGoal) => {
        if (err){
            res.status(500)
            return next (err)
        }
        res.status(200).send(foundGoal)
    })
})

// * Post
goalRouter.post("/", (req, res, next) => {
    const newGoal = new Goal(req.body)
    newGoal.save((err, savedGoal) => {
        if (err){
            res.status(500)
            return next (err)
        }
        return res.status(201).send(savedGoal)
    })
})

// * Delete
goalRouter.delete("/:_id", (req, res, next) => {
    Goal.findOneAndRemove({ _id: req.params._id }, (err, deletedGoal) => {
        if (err){
            res.status(500)
            return next (err)
        }
        return res.status(202).send(
            {
                goal: deletedGoal,
                msg: `Successfully deleted ${deletedGoal.name}.`
            }
        )
    })
})

// * Put 
goalRouter.put("/:_id", (req, res, next) => {
    Goal.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        (err, updatedGoal) => {
            if (err){
                res.status(500)
                return next (err)
            }
            res.status(201).send(updatedGoal)
        }
    )
})

module.exports = goalRouter