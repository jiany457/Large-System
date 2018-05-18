 // https://www.hacksparrow.com/node-js-udp-server-and-client-example.html
var REMOTE_PORT = parseInt(process.argv[2]); // anything you put
var LOCAL_PORT = parseInt(process.argv[3]); //anything you put
//argv = arguement vector
// a list all arguement that we passed through node through commands
var REMOTE_HOST = process.argv[4];
var LOCAL_HOST = '127.0.0.1';

var dgram = require('dgram');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'large-systems-chat> '
});

rl.prompt();

// lexical closure
rl.on('line', function (userLine) {
  udpSend(userLine);
  console.log(userLine + "!!!");
  rl.prompt();
});

var client = dgram.createSocket('udp4');

function udpSend(data) {
  var message = new Buffer(data);
  client.send(message, 0, message.length, REMOTE_PORT, REMOTE_HOST, function(err, bytes) {
      if (err) throw err;
      console.log('UDP message sent to ' + REMOTE_HOST +':'+ REMOTE_PORT);
      // client.close();
  });
}

var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
});

server.bind(LOCAL_PORT, LOCAL_HOST);