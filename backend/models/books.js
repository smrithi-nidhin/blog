const mongoose = require('mongoose');
const Book = mongoose.model('Book', {
    title: String,
    price: String,
    imagePath: String,
    image: String,
    description: String

});
module.exports = {
    Book
}