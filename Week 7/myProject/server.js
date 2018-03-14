var osc = require('node-osc');

var client = new osc.client(3333, '0.0.0.0');
oscServer.on("message", function (msg, rinfo){
	console.log("massage:");
	// console.log(msg);
	// console.log(typeof, msg[0]);
	// console.log(typeof, msg[1]);

	if(msg[0] == "powerup"){
		//powerup things
	}else if(msg[0] == "death"){
		//death things
	}

});
