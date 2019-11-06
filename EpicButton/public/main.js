$(document).ready(function(){
	console.log("ready");
	const socket = io();
	socket.on('greetings', function(data){
		console.log(data.msg);
	})
	$('#button').click(function(){
		socket.emit('beta', { msg: "THE BUTTON HAS BEEN FUCKING PUSHED!!"});
		// return false;
	})
	socket.on('count', data => {
		console.log('LETS GET THIS')
		console.log(data)
		$('#count').html(data.data);
	})
	$('#reset').click(function(){
		socket.emit('notbeta', { msg: "SOME MOFO RUINED EVERYTHING"});		
		// return false;
	})
	socket.on('reset', data => {
		console.log('I might cry');
		$('#count').html(data.data);
	})

});