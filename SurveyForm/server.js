const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {

	res.render('form');
})
app.post('/add', (req, res) => {
	context = {
		form: req.body,
	}
	res.render('results', context)
})

// app.get('/results', (req, res) =>{
// 	const { id } = req.params;
// 	res.render('results')
// })

app.listen(8000, () => console.log("listening on port 8000"));