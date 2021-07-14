const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// User Connection To DB
const UserController = require('./controllers/users')
app.use('/users', UserController)

const ReadBookController = require('./controllers/read-books')
app.use('/read-books', ReadBookController)

app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})