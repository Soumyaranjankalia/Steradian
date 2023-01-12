const mongoose = require('mongoose');
module.exports = () => {
    return mongoose.connect("mongodb+srv://Steradian:12345@cluster0.jxur5iy.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser:true})
}