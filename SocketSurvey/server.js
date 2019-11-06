const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
const server = app.listen(8000);
const io = require('socket.io')(server);
// var counter = 0;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {   
	socket.emit('greeting', { msg: 'Greetings -Server' }); 
	socket.on('submit', function (data) { 
    	console.log(data.msg); 
    	var form = {}
    	form.name = data[0].value;
    	form.cool = data[1].value;
    	form.birthday = data[2].value;
    	form.language = data[3].value;
        // var num = parseInt((Math.random() * 100));
    	socket.emit('result', {'data': form})
  });
    
});

// app.post('/add', (req, res) => {
// 	context = {
// 		form: req.body,
// 	};
// 	res.render('results', context)
// })

// app.get('/results', (req, res) =>{
// 	const { id } = req.params;
// 	res.render('results')
// })

// app.listen(8000, () => console.log("listening on port 8000"));