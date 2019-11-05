const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash = require("express-flash");
const session = require("express-session");
// const moment = require('moment');

app.use ( flash());
app.use ( bodyParser.urlencoded ( { extended : true } ) );
app.use ( express.static ( __dirname + '/static' ) );
app.use(session({
    secret: "quotes",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.set ( 'views', __dirname + '/views' );
app.set ( 'view engine', 'ejs' );

mongoose.connect('mongodb://localhost/quotes', {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 1, maxlength: 100},
 quote: {type: String, required: true, minlength: 10}
})
var Quote = mongoose.model('Quote', QuoteSchema);


app.get('/', (req, res) => {
	res.render('index');
})
app.post('/quotes', (req, res) => {
	var newquote = new Quote(req.body);
	newquote.save()
		.then(newQuote =>{
			res.redirect('/quotes');
		})
		.catch(err => res.json(err));
})
app.get('/quotes', (req, res) => {
	Quote.find()
		.then(quotes => {
			console.log(quotes)	
			// var allquotes = [];
			// for (i in quotes)
			// 	allquotes.push(quotes[i]);
			// console.log(allquotes)
			context = {
					"quotes" : quotes,
			};
			res.render('quotes', context);
		})
		.catch(err => res.json(err));

			// res.render('quotes', context);
})



app.listen(8000, () => console.log("listening on port 8000"));