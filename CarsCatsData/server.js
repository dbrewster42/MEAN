const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (request, response) => {
   response.send("Hello Express");
})
app.get('/cars', (request, response) => {
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