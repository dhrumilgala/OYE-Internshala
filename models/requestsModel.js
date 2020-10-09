const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin:admin@cluster0.pavbm.mongodb.net/Indent?retryWrites=true&w=majority",{useNewUrlParser: true});
const requestSchema = new mongoose.Schema({
    internshipId: Number,
    userId: String,
    domain: String,
    seen:Boolean,
    date:Date
});
const request = mongoose.model('requests',requestSchema);


module.exports = request;
