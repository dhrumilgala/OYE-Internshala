const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://tanveeshs:admin@cluster0-pavbm.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true});
const ContactSchema = new mongoose.Schema({
    name:String,
    email:String,
    comment:String
    }
)
module.exports = mongoose.model('Contact',ContactSchema)
