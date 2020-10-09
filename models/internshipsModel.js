const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin:admin@cluster0.pavbm.mongodb.net/Indent?retryWrites=true&w=majority",{useNewUrlParser: true});
const internshipSchema = new mongoose.Schema({
    name: String,
    description:String,
    user1:String,
    user2:String,
    user3:String,
    user4:String,
    internshipId: Number,
    author:String,
    link:String,
    complete: Number,
});
const internship = mongoose.model('internships',internshipSchema);



module.exports = internship;
