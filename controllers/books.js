// const express = require('express')
// const router = express.Router()
// const Fetch = require('node-fetch')

// const BASE_SEARCH_ENPOINT = 'http://openlibrary.org/search.json?q='

// const mockSearchObject = {
//     title: 'lord of the rings',
//     author: 'tolkien',
//     subject: 'J.R.R'
// }

// router.post('/', async (req, res) => {
//     // const searchObject = req.body
//     const searchTitle = mockSearchObject.title.replace(/ /g, '+')
//     const searchAuthor = mockSearchObject.author.replace(/ /g, '+')
//     const searchSubject = mockSearchObject.subject.replace(/ /g, '+')
//     const SEARCH_ENPOINT = `${BASE_SEARCH_ENPOINT}${searchTitle}+${searchAuthor}+${searchSubject}`
//     console.log(SEARCH_ENPOINT)
//     try {
//         const response = await Fetch(SEARCH_ENPOINT)
//         console.log(response)
//         // const data = await response.json()
//         res.json({data: 'data'})
//     } catch (error) {
//         console.error()
//     }
// })

// module.exports = router