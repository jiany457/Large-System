const readline = require ('readline');

const rl = readline.createInterface({
	input: process.stdin,
	outout: process.stdout,
	prompt: 'Yujie\'first chat app>'
});


rl.prompt();

rl.question('line', (answer) => {
  // TODO: Log the answer in a database
  console.log(`why is ${answer}`);

  // rl.close();

});

