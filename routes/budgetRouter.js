const express = require('express')
const budgetRouter = express.Router()
const Transaction = require('../models/transaction.js')


// * Get All Transactions
budgetRouter.get("/", (req, res, next) => {
    Transaction.find((err, transactions) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(transactions)
    })
})

// * Get One Transaction
budgetRouter.get("/:_id", (req, res, next) => {
    Transaction.findOne({ _id: req.params._id }, (err, foundTransaction) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundTransaction)
    })
})

// * Post 
budgetRouter.post("/", (req, res, next) => {
    console.log(req.body)
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
    Transaction.findOneAndRemove({ _id: req.params._id }, (err, deletedTransaction) => {
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
    })
})

// * Put
budgetRouter.put("/:_id", (req, res, next) => {
    Transaction.findOneAndUpdate(
        { _id: req.params._id }, 
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