const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        enum: ["income", "expense"],
        required: true
    },
    date: {
        type: Date,
    }
})

module.exports =  mongoose.model("Transaction", transactionSchema)