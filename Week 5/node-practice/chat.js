const readline = require('readline');

const rl = readline.createInterface({ //readline -> get what it ask for
	input:process.stdin,
	output:process.stdout,
	prompt: 'large-systems-chat>'
});

//{} --> means objects

rl.prompt();

//calling a function called "on"
// rl = read line
// rl.on('line',function(anythingyouwant){ //two argument: string, function // short for (anythingyouwant) =>

// 	console.log(anythingyouwant + "!");
// 	rl.prompt();
// });

//OR

//lexical closure -> every JS script remember the environment where it was created
function handleLineInput(userLine){
	console.log(userLine + "!!"); //you know when and what to send the msg
	rl.prompt();
}

rl.on('line', handleLineInput);