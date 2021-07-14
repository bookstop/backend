const express = require('express')
const router = express.Router()

const User = require('../models/user')

// /read-books/

// Index Router
router.get('/:id', async (req, res) => {
    try {
        const reviews = await User.findById(req.params.id)
        res.status(200).json(reviews.readBook)
    } catch (error) {
        console.error(error)
    }
})

// Create Route
router.post('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$push: {readBook: req.body}}, { new: true })
        res.status(201).json(updatedUser)
    } catch (error) {
        console.error(error)
    }
})

router.delete('/:userId/:readBookID', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)

        const newReadBooks = user.readBook.filter((book) => book._id.toString() !== req.params.readBookID)

        const updatedUser = await User.findByIdAndUpdate(req.params.userId, { readBook: newReadBooks }, { new: true })

        res.status(204).json(updatedUser)

    } catch (error) {
        console.error(error)
    }
})

module.exports = router