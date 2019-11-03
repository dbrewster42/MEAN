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
app.get('/form', (request, response) => {
   response.render("form");

})

app.listen(8000, () => console.log("listening on port 8000"));