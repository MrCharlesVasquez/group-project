const express = require('express')
const budgetRouter = express.Router()
const Transaction = require('../models/transaction.js')


// * Get All Transactions by User
budgetRouter.get("/", (req, res, next) => {
    Transaction.find(
        { user: req.user._id },
        (err, transactions) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(transactions)
        }
    )
})

// * Get One Transaction by User
// ! feature not included in MVP - routes initialized if future updates require
budgetRouter.get("/:_id", (req, res, next) => {
    Transaction.findOne(
        { _id: req.params._id, user: req.user._id },
        (err, foundTransaction) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!foundTransaction){
                res.status(404)
                return next(new Error("No transaction item found"))
            }
            return res.status(200).send(foundTransaction)
        }
    )
})

// * Post (Add New Transaction)
budgetRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newTransaction = new Transaction(req.body)
    newTransaction.save((err, savedTransaction) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTransaction)
    })
})

// * Delete
budgetRouter.delete("/:_id", (req, res, next) => {
    Transaction.findOneAndRemove(
        { _id: req.params._id, user: req.user._id },
        (err, deletedTransaction) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(202).send(
                {
                    transaction: deletedTransaction,
                    msg: `Successfully deleted ${deletedTransaction.transName}.`
                }
            )
        }
    )
})

// * Put (Update Transaction)
// ! feature not included in MVP - routes initialized if future updates require
budgetRouter.put("/:_id", (req, res, next) => {
    Transaction.findOneAndUpdate(
        { _id: req.params._id, user: req.user._id }, 
        req.body,
        { new: true },
        (err, updatedTransaction) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(201).send(updatedTransaction)
        }
    )
})

module.exports = budgetRouter