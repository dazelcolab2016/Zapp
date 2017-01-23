var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var express = require('express');

var router = express();

router.use(express.static(path.resolve(__dirname, 'public')));


var server = http.createServer(router);
var io = socketio.listen(server);

var sockets = [];
var mensajes = [];

io.on('connection', function(socket){
	console.log("Holaa");
	sockets.push(socket);
	//socket.set('name', 'XXX');
	socket.emit('historia', mensajes);

	socket.on('saludo', function(_saludo){
		//if(socket.get('name', 'XXX') != 'XXX')
		//{
			mensajes.push(_saludo);

			for(var i in sockets)
			{
				sockets[i].emit("saludo_global", _saludo);
			}
		//}
	});

	socket.on('identify', function(_name){
		socket.set('name', 'yyyy');
	})
});


server.listen(4000,"0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
