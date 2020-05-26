const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://tanveeshs:admin@cluster0-pavbm.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true});
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const user = mongoose.model('users',userSchema);


module.exports = user;
