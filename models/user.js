const readBookSchema = require('./read-book')
const wishListSchema = require('./wish-list')
const mongoose = require('../db/connection')

// CHANGE IT TO RELATIONAL SCHEMES

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true, },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    status: { type: String, required: true },
    lastAccess: { type: Number, required: true },
    readBook: [readBookSchema],
    wishList: [wishListSchema],
    emailAddress: String
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema)

module.exports = User