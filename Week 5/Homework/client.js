var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');


//from Chat.js
const readline = require ('readline');

const rl = readline.createInterface({
	input: process.stdin,
	outout: process.stdout,
	prompt: 'Yujie\'first chat app>'
});

rl.prompt();


function handleLineInput(userLine){
	var message = new Buffer(userLine);
	var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    // console.log('UDP message sent to ' + HOST +':'+ PORT);
    // client.close();
});

	console.log(userLine + "!!");
	

rl.on('line', handleLineInput);

