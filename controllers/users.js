const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')

// Index Route
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
    }
})

// Show Route
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        console.error(error)
    }
})

// Create Route
router.post('/', async (req, res) => {
    const passwordHash = bcrypt.hashSync(req.body.password, 10)
    req.body.password = passwordHash
    try {
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
    }
})

// Delete Route
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.status(204).json(deletedUser)
    } catch (error) {
        console.error(error)
    }
})

// Update Route
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json(updatedUser)
    } catch (error) {
        console.error(error)
    }
})


module.exports = router
