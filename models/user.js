const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true, },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: String
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema)

module.exports = User