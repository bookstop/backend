BOOK STOP API

An API for the Book Stop Client, holds the Endpoints that the app will access in order to be a CRUD application.

    ROUTES:
        User:
            Index: GET /users
            Show: GET /users/:id
            Create: POST /users
            Delete: DELETE /users/:id
            Update: PUT /users/:id
            Status: GET /status/:id
            Update Status: PUT /status/:id
            Log User In: POST /login
            Log User Out: PUT /logout/user
        Read Books:
            Index: GET /read-books/:userId
            Show: GET /read-books/book/:bookId
            Create: POST /read-books
            Update: PUT /read-books/:bookId
            Delete: DELETE /read-books/:bookId
        Wish Lists:
            Index: GET /wish-lists/:userId
            Show: GET /wish-lists/book/:bookId
            Create: POST /wish-lists
            Update: PUT /wish-lists/bookId
            Delete: DELETE /wish-lists/bookId
        
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

