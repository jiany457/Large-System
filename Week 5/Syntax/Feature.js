
//Feature of Javascript

//dynamic typing
var name = "Yujie"; // var defines multiple types of data, JS will figure out the type itself


//types can change
name = 87; //semi-colon is preferred


//JS cannot define the type of numbers, i.e., no float, int, etc.

//Array
var students = ["student1", "student2,"];

students [0];
students [1];
students [2]; //will actually work, but the outcome value is called undefined


//javascript is designed to run on existing software or browsers or hosts, but C++ is running only on itself.
//so even it is only one language, it can have multi-functions, e.g., AfterEffects
for (var i = students.length-1; i >= 0; i--){ //students.length -> ask for the length field out of the array of students
	console.log(students[i]); // . -> access
	//Im calling to execute this function 
}


//two ways to create functions in JS
//type 1
function greeter(name){
	return "hello" + name;
}
//type 2, helps to store a function in a variable
var greeter = function(name){
	return "hello" + name;
}

//type 3, syntax suger for aesthetic reason to exist 
var greeter = name => "hello" + name;

// return a function inside a function
var metaGreeter = function(name){
	return function(greeting){
		return greeting + name;
	}
}

// for + 

// "a" + "b" = "ab"
// 1 + 8 = 9
// "name" + 100 = "name100"





