const express = require('express')
const router = express.Router()

const User = require('../models/user')

// /wish-lists/

// Index Route
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.status(200).json(user.wishList)
    } catch (error) {
        console.error(error)
    }
})

// Show Route
router.get('/book/:id', async (req, res) => {
    try {
        const user = await User.findOne({'wishList._id': req.params.id})
        const book = user.wishList.id(req.params.id)
        res.status(200).json(book)
    } catch (error) {
        console.error
    }
})

// Create Route
router.post('/', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.body.userId, {$push: {wishList: req.body}}, {new: true})
        res.status(201).json(updatedUser)
    } catch (error) {
        console.error(error)
    }
})

// Delete Route
router.delete('/:wishListId', async (req, res) => {
    try {
        const user = await User.findOne({'wishList._id': req.params.wishListId})

        const newWishList = user.wishList.filter(book => {
            return book._id.toString() !== req.params.wishListId
        })

        const newUser = await User.findOneAndUpdate({'wishList._id': req.params.wishListId}, {wishList: newWishList}, {new: true})

        res.status(204).json(newUser)

    } catch (error) {
        console.error(error)
    }
})

// Update Route
router.put('/:bookID', async (req, res) => {
    try {
        const user = await User.findOne({'wishList._id': req.params.bookID})
        const book = user.wishList.id(req.params.bookID)
        book.set(req.body)
        user.save()
        const newUser = await User.findByIdAndUpdate(user._id, user, {new: true})
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
    }
})


module.exports = router