BOOK STOP API

An API for the Book Stop Client, holds the Endpoints that the app will access in order to be a CRUD application.

    ROUTES:
        User:
            Index: /users
            Show: /users/:id
            Create: /users
            Delete: /users/:id
            Update: /users/:id
        Read Books:
            Index: /read-books/:userId
            Show: /read-books/book/:bookId
            Create: /read-books
            Update: /read-books/:bookId
            Delete: /read-books/:bookId
        Wish Lists:
            Index: /wish-lists/:userId
            Show: /wish-lists/book/:bookId
            Create: /wish-lists
            Update: /wish-lists/bookId
            Delete: /wish-lists/bookId
        
With these routes the API will be able to access the Mongo Database and perform the desired operations.

    USER:
        username - Required String
        password - Required String
        First Name - Required String
        Last Name - Required String
        Email Address - String
    
        READ BOOKS:
            Title - Required String
            Author - Required String
            Review - Required String
            User ID - Reference to the owner of the book

        WISH LIST:
            Title - Required String
            Author - Required String
            User ID - Reference to the owner of the book
            
 API URL: -----

