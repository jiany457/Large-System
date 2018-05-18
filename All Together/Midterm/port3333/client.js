var osc = require('node-osc');

var client = new osc.Client('127.0.0.1',3333);

client.send('/something-else', "jumping", function(){
	client.kill();
});