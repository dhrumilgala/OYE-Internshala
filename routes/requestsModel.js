const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://tanveeshs:Tanveesh21@indent-pavbm.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true});
const requestSchema = new mongoose.Schema({
    internshipId: Number,
    userId: String,
    domain: String,
});
const request = mongoose.model('requests',requestSchema);


module.exports = request;
