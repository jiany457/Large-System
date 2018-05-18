var express = require('express');
var app = express();
// same as
// var express = require('express')
// var app =  express();
var http = require('http').Server(app); // this creates all kinds of low level server which connect to express (line 1)
var io = require('socket.io')(http);

app.use(express.static('public'));

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function(socket){ //connection is meaningful, we cannot change it
  // // console.log('a user connected');
  // // socket.on('disconnect', function(){
  // //   console.log('user disconnected');
  //   console.log('a user connected', socket.id);

  //   socket.on('test', function(){
  //   	console.log(data);

  //   });

  //   	socket.on('john', function(){
  //   	console.log(data.name);
  //   	console.log(data.job);
    	
  //   	if(data.hacker){
		// 	console.log('hacker');
  //   	}else{
		// 	console.log('jsut a normal programmer');
  //   	}
  

  //       socket.on('chat', function(){
  //   	console.log(message);
  //   	socket.emit('chat', {user: "server", text:"Hello" + message.user + "The time is "+ Date() 
      console.log('a user connected', socket.id);
      socket.on('brush', function(brushData){
        // brushData.x = 80;
      console.log('brush', brushData);
      socket.broadcast.emit('brush', brushData); // tell everyone but socket
    });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});