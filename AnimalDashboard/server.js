const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require("express-session");
var flash = require("express-flash");
mongoose.Promise = global.Promise;

app.use(flash());
app.use ( bodyParser.urlencoded ( { extended : true } ) );
app.use(session({
    secret: "ferrets",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.use ( express.static ( __dirname + '/static' ) );
app.set ( 'views', __dirname + '/views' );
app.set ( 'view engine', 'ejs' );

mongoose.connect('mongodb://localhost/animals', {useNewUrlParser: true});

const AniSchema = new mongoose.Schema({
	name:  { type: String, required: true, minlength: 3, maxlength: 20},
	species: { type: String, required: true, maxlength: 20 },
	description: { type: String, required: false }
})
var Animal = mongoose.model('Animal', AniSchema);

app.get('/', (req, res) => {
	Animal.find()
		.then(animals => {
			console.log(animals)
			res.render('index', {'animals': animals});
		})
		.catch(err => res.json(err))
	
})
app.get('/animal/new', (req, res) => {
	res.render('new');
})
app.post('/add', (req, res) => {
	var animal = new Animal(req.body);
	animal.save(function(err) {
		if(err){
			console.log("Oops! ", err)
			for (var key in err.errors)
				req.flash("newAnimal", err.errors[key].message);
			res.redirect('new')
		}
		else 
			console.log("Success");
	})

	res.redirect('/')
})

app.get('/animal/:id', (req, res) => {
	console.log("The id is ", req.params.id);
	Animal.findOne({ _id: req.params.id})
		.then(animal => {
			console.log(animal)
			res.render('ids', {'animal': animal})
		})
		.catch(err => res.json(err));
		
})
app.post('/animal/destroy/:id', (req, res) => {
	console.log(req.params.id);
	Animal.remove({_id: req.params.id })
		.then(deletedAnimal => {
			console.log("Animal Destroyed!");
			res.redirect('/');
		})
		.catch(err => res.json(err));
})
app.get('/animal/edit/:id', (req, res) => {
	console.log(req.params.id);
	Animal.findOne({ _id: req.params.id})
		.then(animal => {
			console.log(animal);
			res.render('edit', {'animal': animal})
		})
		.catch(err => res.json(err));
})

app.post('/animal/:id', (req, res) => {
	console.log(req.params.id)
	Animal.updateOne({ _id: req.params.id }, {$set: {name: req.body.name, species: req.body.species, description: req.body.description}}, function(err){
		if(err)
			console.log("Error Editing")
		else
			res.redirect('/');

	})
	
})

app.listen(8000, () => console.log("listening on port 8000"));