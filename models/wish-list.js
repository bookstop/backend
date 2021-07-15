const mongoose = require('../db/connection')

const WishListSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})