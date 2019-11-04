const express = require("express");
const session = require('express-session');
const app = express();




app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, response) => {
	if(req.session.counter == null){
        req.session.counter = 0;
    }
    
  response.render("index", {counter : req.session.counter});
})
app.get('/count', (req, res) => {
	req.session.counter += 1;
	res.redirect('/')
})
app.get('/cars', (req, response) => {
	req.session.counter += 1;    
	response.render('cars');
})
// app.get('/cats', (request, response) => {
//    response.send("Hello Cat");
// });
app.get("/speedy", function(request, response){
    var details = {
        name : "Speedy",
        favFood : "road kill",
        age : "2018",
        pic : "images/car.jpg",
        spots : ["On the car tires", "In the garage"]
    }
    response.render("details", {kitty: details});
})
app.get("/pretty", function(request, response){
    var details = {
        name : "Pretty",
        favFood : "human flesh",
        age : "3",
        pic : "images/cat.jpg",
        spots : ["Around your hand", "In your ass"]
    }
    response.render("details", {kitty: details});
})
app.get("/cool", function(request, response){
    var details = {
        name : "Miles Davis Jr",
        favFood : "heroin",
        age : "83",
        pic : "images/download.jpg",
        spots : ["At the club", "and on barstools"]
    }
    response.render("details", {kitty: details});
})
app.get('/form', (request, response) => {
   response.render("form");

})

app.listen(8000, () => console.log("listening on port 8000"));