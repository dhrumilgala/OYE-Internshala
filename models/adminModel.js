const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin:admin@cluster0.pavbm.mongodb.net/Indent?retryWrites=true&w=majority",{useNewUrlParser: true,});
const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});
const admin1 = mongoose.model('admin',adminSchema);


module.exports = admin1;
