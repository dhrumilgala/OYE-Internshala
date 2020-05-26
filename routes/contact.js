var express = require('express');
var router = express.Router();
const contactModel = require('../models/contactModel')
const nodeMailer = require('nodemailer')
let mailTransporter = nodeMailer.createTransport({
    service:'gmail',
    auth: {
        user: 'indentinternship@gmail.com',
        pass: 'indent2020'
    }
})


router.get('/',function (req,res) {
    res.render('contactus')
});

router.post('/send',function (req,res) {
    const Name = req.body.name;
    const email = req.body.email;
    const comments = req.body.feedback;
    const s = new contactModel()
    s.name = Name;
    s.email = email;
    s.comment = comments;
    s.save()
    let mail = {
        from:'indentinternship@gmail.com',
        to:s.email,
        subject:'Test Mail',
        text:'Your feedback has been received'
    }
    mailTransporter.sendMail(mail,function (err,data) {
        if(err){
            console.log(err)
        }
        else {
            console.log(data)
            console.log('Mail sent successfully')
        }

    })
    res.redirect('/')

})


module.exports = router;
