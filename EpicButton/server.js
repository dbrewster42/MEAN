const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const server = app.listen(8000);
const io = require('socket.io')(server);
var counter = 0;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
	socket.emit('greetings', { msg: 'Greetings earthling, welcome to greatest game every played'});
	socket.on('beta', function(data){
		console.log(data);
		counter += 1;
		socket.emit('count', {'data': counter})
	})
	socket.on('notbeta', function(data){
		console.log(data);
		counter = 0;
		socket.emit('reset', {'data': counter})
	})
})