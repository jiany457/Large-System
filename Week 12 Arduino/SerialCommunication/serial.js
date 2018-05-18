
// Upon Http protocol

var SerialPort = require('SerialPort');

var port = new SerialPort('/dev/tty-usbserial1', {baudRate:9600
});

port.on('open', function(){
	console.log("serial port conector")
});


//////Terminating character///// going from bytes to meaningful data
var textSoFar = "";

var maxPressCount = 100;
var pressCount = 0;

function reactToHardware(message){
	if(message == "pressed"){
		console.log("you pressed" + pressCount + "times");
		pressCount += 1;

		if (pressCount > maxPressCount){
			port.write(Buffer([10]));
		}
	}
}


port.on('readable', function(){
	var newData = port.read().toString();
	// var firstSpace = port.read().toString().indexOf(" "); //space character, we can change it to anything we want, e.g.,"|"
	var firstspace = newData.indexOf("|");
	if(firstSpace == -1){
		// no space
		textSoFar += newData;
	}else{
		textSoFar += newData.slice(0, firstSpace);
		console.log(textSoFar);
		textSoFar = newData.slice(firstspace + 1);
	}

});



/////Counting bytes
// const  bytesExpected = 5;
// var textSoFar = '';


// port.on ('readable', function(){
// 	textSoFar += port.read().toString;
// 	if(textSoFar.Length > bytesExpected){
// 		console.log(textSoFar.slice(0, bytesExpected){
// textSoFar = '';
// 	}

//port.on ('readable', function(){
// 	 console.log("data", port.read())
// });