const express = require('express')
const router = express.Router()

const User = require('../models/user')
const Book = require('../models/read-book')

// /read-books/

// Index Route
router.get('/:id', async (req, res) => {
    try {
        const reviews = await User.findById(req.params.id)
        res.status(200).json(reviews.readBook)
    } catch (error) {
        console.error(error)
    }
})

// Create Route
router.post('/', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.body.userId, {$push: {readBook: req.body}}, { new: true })
        res.status(201).json(updatedUser)
    } catch (error) {
        console.error(error)
    }
})

// Update Route
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findOne({'readBook._id': req.params.id})
        const book = user.readBook.id(req.params.id)
        book.set(req.body)
        user.save()
        res.status(201).json(user)
    } catch (error) {
        console.error(error)
    }
})

// FIX DOWNWARD

router.delete('/:userId/:readBookID', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)

        const newReadBooks = user.readBook.filter(book => book._id.toString() !== req.params.readBookID)

        const updatedUser = await User.findByIdAndUpdate(req.params.userId, { readBook: newReadBooks }, { new: true })

        res.status(204).json(updatedUser)

    } catch (error) {
        console.error(error)
    }
})

module.exports = router