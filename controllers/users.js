const express = require('express')
const router = express.Router()

const User = require('../models/user')

// Index Route
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find()
//     } catch (error) {
//         console.error(error)
//     }
// })


module.exports = router
