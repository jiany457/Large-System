//source code from: https://www.hacksparrow.com/node-js-udp-server-and-client-example.html

var PORT = 33333;
var HOST = '127.0.0.1'; // IP Address

var dgram = require('dgram'); //require node built in udp library // require data gram library
var server = dgram.createSocket('udp4'); //dgram object, createSocket function, 'udp4' kinds of values it willl play with
//creating a socket and store it in server

server.on('listening', function () { 
// on function always means schedule code run in the future, like if/when xx happens do xx
// In this case, when you receive "listen", you run the function
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) { //message from the remote
// when you receive "message", then you run the function
    console.log(remote.address + ':' + remote.port +' - ' + message);	

});

server.bind(PORT, HOST);