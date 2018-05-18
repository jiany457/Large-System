const express = require('express') //const can be replace by var
const app = express() // make a new app
// you can change "app" to any name you want, this code store express library into a variable

// express can be both a libary and a function

// app.get('/', (req, res) => res.send('Hello World!')) // request and response 
// '/'means path, when you add words, e.g., /pump, then localhost:3000 change to localhost:3000/pump
// "get" means very time people visit the page
// "=>" means to declare a function
	//equivalent:  app.get('/', (req, res) { res.send('Hello World!'); });

	const bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({extended:true}));

var database = [];

app.post('/conatct', (req, res) => {
	var newContact = req.body;
	database.push(newContact.name);
	res.send("Current Contacts:" + database.join("/n"));
});


// you can also send an html file directly:
app.get('/req-test', (req,res)=> {

	res.sendFile("/Users/jiany457/Desktop/Large-System/Week9/ls-express/index.html");
});

app.get('/some-page', (req, res) => {
res.send("Welcome to some page")
});

app.get('/req-test', (req,res)=> {
	console.log(req); //appear req inside Terminal
	res.send("done");
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))
