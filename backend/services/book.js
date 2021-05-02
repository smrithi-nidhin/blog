const { User } = require('../models/user');
const { Book } = require('../models/books');



function addUser(username, password, accountno) {
    console.log("in services addduser");
    return User.findOne({
        username
    })
        .then(user => {
            if (user) {
                return {
                    statusCode: 400,
                    message: "Account already exists"
                }
            }
            const newUser = new User({
                username, password, accountno
            })
            newUser.save();
            return {
                statusCode: 200,
                message: "Account created sucessfully"
            }

        })
    // data[username] = { username, password, accountn0, balance:0 };

}
function addbook(title, price) {
    console.log("in services adddbook");
    //console.log(imagePath);
    return Book.findOne({
        title
    })
        .then(books => {
            if (books) {
                return {
                    statusCode: 400,
                    message: "Book exists"
                }
            }
            const newbook = new Book({
                title, price
            })
            // newbook.save();
            return {
                statusCode: 200,
                message: "Book added sucessfully"
            }

        })
    // data[username] = { username, password, accountn0, balance:0 };

}


function createNewBook(title, description, imagePath, image) {
    console.log("productServices - createNew");
    return Book.findOne({
        title
    })
        .then(book => {
            if (book) {
                return {
                    statusCode: 400,
                    message: "Book already exists"
                }
            }
            const newBook = new Book({
                title, description, imagePath, image


            });
            newBook.save();

            return {
                statusCode: 200,
                message: "Blog added successfully"
            }
        })
}

function login(username, password) {
    console.log('bookServices - login');

    return User.findOne({
        username, password

    })
        .then(user => {
            if (user) {
                let record1 = user.username
                let record2 = user.password
                console.log(record1)
                return {
                    statusCode: 200,
                    record: user,
                    message: "Logged in successfully"

                }
            }
            return {
                statusCode: 400,
                message: "Invalid credentials"
            }
        });
}
function navbar(){
    console.log("in backend services--getAllboioks")
    return Book.find({})

        .then(books => {
            return {
                statusCode: 200,
                message: "Books List Following",
                books: books
            }
        })
}

function getAllBooks() {
    console.log("in backend services--getAllboioks")
    return Book.find({})

        .then(books => {
            return {
                statusCode: 200,
                message: "Books List Following",
                books: books
            }
        })
}
// function getBooksByTitle (title){
//     console("inside service getbooks  by title")
//     return Book.find({"title":title}) 
//     .then (books=>{
//             return{
//                 statusCode:200,
//                 message:"sucessfull  title search",
//                 books:books
//             }
//     })
// }


function getBooksByTitle(title) {
    console.log('bookServices - title');

    return Book.findOne({
        title

    })
        .then(books => {
            if (books) {
                let record1 = books.title
                console.log(record1)
                return {
                    statusCode: 200,
                    books: books,
                    message: "book in successfully"

                }
            }
            return {
                statusCode: 400,
                message: "Invalid credentials"
            }
        });
}


function setCurrentUser(username) {
    currentUser = username;

}
function getCurrentUser(username) {
    return currentUser;

}



function createNewBlog(title,description,imagePath){
    console.log("BlogServices - createNewBlog");
    console.log(title+description+imagePath)
    return Book.findOne({
        title
    })
    .then (obj=>{
        if(obj){
            return{
                statusCode:400,
                message:"Blog on this topic  already exists"
            }
        }
        const newBlog= new Book({
            title,description,imagePath
        });
        newBlog.save();
 
        return {
            statusCode:200,
            message:"Blog created successfully",
            
            
        }
    })
    //data[username]={username,password,acno,history:[],balance:0};
}
 
function UpdateColumn(ColumnName,newValue){   
 
    console.log('Function-UpdateColumn in controller.js.........................')
    let newValueForBlogTitle=newValue;
    let currentBlogTitle ="kilis";
 
    return Book.updateOne( { title :currentBlogTitle },{
        $set: {
            title: newValueForBlogTitle
            
        }
    } )
    .then (obj=>{
        if(obj){
            return{ 
                statusCode:200,
                message:"updated in successfully",
                
                
                
 
 
            }
        }
        return {
            statusCode:400,
            message:"Invalid credentialss1"
        }
    })
   
}
 
function getAllBlogs(){
    console.log("in service-blog");
    return Book.find({}) 
    .then (books=>{
            return{
                statusCode:200,
                books:books
            }
    })
}


module.exports = {
    //getUsers:getUsers,
    addUser: addUser,
    login: login,
    addbook: addbook,
    createNewBook: createNewBook,
    getAllBooks: getAllBooks,
    getBooksByTitle: getBooksByTitle,
    createNewBlog:createNewBlog,
    getAllBlogs:getAllBlogs,
    UpdateColumn:UpdateColumn
    //k:k
}