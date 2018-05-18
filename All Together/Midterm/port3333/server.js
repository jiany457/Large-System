var osc = require('node-osc');

var oscServer = new osc.Server(3333, '0.0.0.0');
oscServer.on("message", function(msg, rinfo)
	{
		console.log(msg[0]);
		console.log(msg[1]);
		console.log(msg[2]);

	});

// var data = {
//     x: mouseX,
//     y: mouseY
//   }

// function mouseMsg(data){
// 	oscServer.send('/mouse', data);
// 	console.log(data);   