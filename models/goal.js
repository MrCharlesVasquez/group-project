const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goalSchema = new Schema({
    goalName: {
        type: String,
        required: true
    },
    goalDescription: String,
    goalPrice: {
        type: Number,
        required: true
    },
    goalDate: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Goal", goalSchema)