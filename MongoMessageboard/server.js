const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
	const flash = require("express-flash");	
	const session = require('express-session');
	app.use ( flash());
	app.use(session({
    	 secret: "quotes",
   	 resave: false,
   	 saveUninitialized: true,
   	 cookie: { maxAge: 60000 }
 	 }))

app.use ( bodyParser.urlencoded ( { extended : true } ) );
app.use ( express.static ( __dirname + '/static' ) );
app.set ( 'views', __dirname + '/views' );
app.set ( 'view engine', 'ejs' );

mongoose.connect('mongodb://localhost/mboard', {useNewUrlParser: true});


const CommentSchema = new mongoose.Schema({
  name:  { type: String, required: [true, "No name no game"]}, 
  content: {type: String, required: [true, "Posts must have content"]},
}, {timestamps: true})
const MessageSchema = new mongoose.Schema({
  name:  { type: String, required: [true, "No name no game"]},
  content: {type: String, required: [true, "Message must have content"], minlength: [3, "Messages must have at least 3 characters"]},
  comments: [CommentSchema]
}, {timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

app.get('/', (req, res) => {
  Message.find()
  .then(messages => {
    console.log(messages)
    res.render('index', {'posts': messages})
      })
  .catch(err => res.json(err))
  
})
app.post('/message', (req, res) => {
  var message = new Message(req.body);
  message.save((err) => {
    if(err){
      console.log("Oops! ", err)
      for (var key in err.errors)
        req.flash("newMessage", err.errors[key].message);
      res.redirect('new')
    }
    else {
      console.log("Success");
      res.redirect('/')
    } 
  })    
})

app.post('/comment', (req, res) => {
  var comment = new Comment(req.body);
  comment.save((err) => {
    if(err){
      console.log("Oops! ", err)
      for (var key in err.errors)
        req.flash("newComment", err.errors[key].message);
      res.redirect('new')
    }
    else {
      console.log("COMMENT HAS BEEN CORRECTLY ADDED YOU SMUCK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      Message.updateOne({_id: req.body.msgId}, {$push: {comments: comment}}, function(err, data) {
                if(err){
                    console.log("~Something went wrong~", err);
                    res.redirect('/');
                }
                else{
                  console.log("WHIPPEEE COMMENT SUCCESS")
                    res.redirect('/');
                }
            })     
    } 
  })    
})



app.listen(8000, () => console.log("listening on port 8000"));

