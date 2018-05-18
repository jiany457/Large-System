var PORT = 33333; //REMOTE_PORT
var HOST = '127.0.0.1'; //REMOTE_HOST
var dgram = require('dgram');
const readline = require ('readline');

const rl = readline.createInterface({
	input: process.stdin,
	outout: process.stdout,
	prompt: 'Yujie\'first chat app>'
});


rl.prompt();

rl.on('line', function(userline){
	var message = new Buffer(userLine);
	var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes){ //REMOTE_POST/HOST
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    // client.close();
});
 // updSend(useline);
console.log(userline+"!!!");
rl.prompt();
