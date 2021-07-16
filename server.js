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

const WishListController = require('./controllers/wish-lists')
app.use('/wish-lists', WishListController)

// const BooksController = require('./controllers/books')
// app.use('/books', BooksController)

app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})