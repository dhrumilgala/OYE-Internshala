const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/indent2");
mongoose.connect("mongodb+srv://newUser:pass1234@indent-pavbm.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true});
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const user = mongoose.model('users',userSchema);


module.exports = user;
