const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://shotaro:fi9o7Qebg0GlpjJQ@cluster0.ujkhf.mongodb.net/a5?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);
