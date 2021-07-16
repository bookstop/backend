const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')

// Index Route - return all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(204).json({});
        console.error(error)
    }
})

// Show Route - return one user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(204).json({});
        console.error(error)
    }
})


// Create Route - create a new user
router.post('/', async (req, res) => {
    try {
        const passwordHash = bcrypt.hashSync(req.body.password, "$2b$10$bookStopAngelicaGHyrgt")
        req.body.password = passwordHash
        if (!req.status) req.status='';
        if (!req.lastAccess) req.lastAccess=Date.now();
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(204).json({})
        console.error(error)
    }
})

// Delete Route - delete an existing user
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.status(204).json(deletedUser)
    } catch (error) {
        res.status(204).json({})
        console.error(error)
    }
})

// Update Route - update an existing user by ID
router.put('/:id', async (req, res) => {
    try {
        const passwordHash = bcrypt.hashSync(req.body.password, "$2b$10$bookStopAngelicaGHyrgt")
        req.body.password = passwordHash
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(204).json({})
        console.error(error)
    }
})


// User Status Route - return current user status
// Values: { status: new || active || cancelled }
//         { lastAccess: 0 or time (number since epoch) }
router.get('/status/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (user) {
            if (!user.status) user.status='';
            if (!user.lastAccess) user.lastAccess=0;
            res.status(200).json(`{ status: ${user.status}, lastAccess: ${user.lastAccess} }`)
        }
        else {
            res.status(204).json({});
        }
    } catch (error) {
        res.status(204).json({})
        console.error(error)
    }
})

// Update User Status Route - update an existing user's status by ID
router.put('/status/:id', async (req, res) => {
    try {
        let updateParams=[req.params.id];
        let newReq={};
        if (req) {
            if (req.body.status) newReq["status"]=req.body.status;
            if (req.body.lastAccess) newReq["lastAccess"]=req.body.lastAccess;
            else {
                newReq["lastAccess"]=Date.now();
            }   
        }
        
        updateParams.push(newReq);

        const updatedUser = await User.findByIdAndUpdate(...updateParams, {new: true})
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(204).json({})
        console.error(error)
    }
})

// Route to Log in user 
router.post('/login', async (req, res) => {
    try {
        const passwordHash = bcrypt.hashSync(req.body.password, "$2b$10$bookStopAngelicaGHyrgt")
        req.body.password = passwordHash
    
        // const user = await User.find({username: req.body.username});
        console.log(req.body.username, req.body.password);
        const user = await User.find({'username': req.body.username, 'password': req.body.password,})
        if ( (user[0]) && (user[0].status==='active') ) {
            let updateParams=[user[0]._id];
            let newReq={};
            newReq["lastAccess"]=Date.now();
            updateParams.push(newReq);
            const updatedUser = await User.findByIdAndUpdate(...updateParams, {new: true})
            res.status(200).json(updatedUser);               
        }
        else {
            res.status(401).json({});
        }
    } catch (error) {
        res.status(401).json({});
        console.error(error)
    }
})

// Route to Log out user 
router.put('/logout/:id', async (req, res) => {
    try {
        let updateParams=[req.params.id];
        let newReq={};
        newReq["lastAccess"]=0;    
        updateParams.push(newReq);
        const updatedUser = await User.findByIdAndUpdate(...updateParams, {new: true})
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(204).json({})
        console.error(error)
    }
})

module.exports = router

