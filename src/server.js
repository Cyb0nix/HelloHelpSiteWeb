const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const transporter = nodemailer.createTransport({

    host: "ssl0.ovh.net",
    port: 587,
    auth: {
        user: 'contact@hellohelp.fr',
        pass: 'H@wh3Jh2z9mn9E5'
    }
});

console.log("yes");

app.use(bodyParser.json());

app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/send', function (req, res) {

    let senderName = req.body.contactFormName;
    let senderEmail = req.body.contactFormEmail;
    let messageSubject = req.body.contactFormSubjects;
    let messageText = req.body.contactFormMessage;
    let copyToSender = req.body.contactFormCopy;

    let mailOptions = {
        to: ['contact@hellohelp.fr'],
        from: senderName,
        subject: messageSubject,
        text: messageText,
        replyTo: senderEmail
    };

    if (senderName === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (senderEmail === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (messageSubject === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (messageText === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (copyToSender) {
        mailOptions.to.push(senderEmail);
    }

    transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end('error');
        } else {
            console.log('Message sent: ', response);
            res.end('sent');
        }
    });
});

app.listen(port, function () {
    console.log('Express started on port: ', port);
});