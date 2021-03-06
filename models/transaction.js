const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    transName: {
        type: String,
        required: true,
    },
    transAmount: {
        type: Number,
        required: true,
    },
    transType: {
        type: String,
        enum: ["income", "expense"],
        required: true
    },
    transDate: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports =  mongoose.model("Transaction", transactionSchema)