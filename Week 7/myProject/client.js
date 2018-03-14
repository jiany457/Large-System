var osc = require('node-osc');

var client = new osc.client('127.0.0.1',3333);
client.send('/oscAddress', 200, function(){
	client.kill();
})