const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://tanveeshs:Tanveesh21@indent-pavbm.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true,});
const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});
const admin1 = mongoose.model('admin',adminSchema);


module.exports = admin1;
