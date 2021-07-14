const reviewSchema = require('./review')
const mongoose = require('../db/connection')

const ReadBookSchema = new mongoose.Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    review: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = ReadBookSchema