$(document).ready(function(){
	console.log("ready");
	const socket = io();
	socket.on('greeting', function(data){
		console.log(data.msg);
	})
	$('button').click(function(){
		socket.emit('submit', $('form').serializeArray());
		return false;
	})
	socket.on('result', data => {
		console.log('server emitted results');
		console.log(data);
		$('.results').html(`<p>You emitted the following information to the server <br> name: ${ data.data.name }</p>
			<p>Cool: ${ data.data.cool }</p> <p>Language: ${ data.data.language }</p><p>Birthday: ${ data.data.birthday }</p>`)
	});
});