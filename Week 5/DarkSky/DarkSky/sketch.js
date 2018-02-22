
var weather;


function preload(){
	weather = loadJSON("https://api.darksky.net/forecast/dd8e31566a811de1cbc75593d61b9569/37.8267,-122.4233");
}

function setup() {
  // put setup code here
  console.log(weather);
}

function draw() {
  // put drawing code here
}