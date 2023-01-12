 const mongoose = require('mongoose');

 const quiestionSchema = new mongoose.Schema({
    question: String,
    answer: String
 });

 module.exports = mongoose.model("questions", quiestionSchema);