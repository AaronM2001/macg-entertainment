// const path= reqire("path");
const express= require("express");
const http = require("http");
const path = require("path");
var fs = require("fs");
const PORT = 8080;
var app= express();

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
  });
  app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, "projects.html"))
  });
  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"))
  });
  app.post('/contact/send', function(req,res){
    var transportrt = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '2001menocal@gmail.com',
            pass:'15586Am2001$'
        }
    });
    var mailOptions = {
        from: 'Aaron Menocal <2001menocal@gmail.com>',
        to: '2001menocal@gmail.com',
        subject: 'Website Submission',
        text: 'You have a submission with the following details... Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
        html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
    }; 
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
            res.send('Email not sent');
        }else{
            console.log('Message sent:' +info.responce);
            res.redirect('/');
        }
    });
    });
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"))
//   });
// // app.get("/", function(req,res){

// // });

// app.get("/view", function(req,res){
//     res.send("You hit the home page");

// });
// app.get("/book",function(req,res){
//     res.send("you hit the services page")
// });





app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  });