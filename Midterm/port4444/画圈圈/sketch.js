
var x;
var y;
var radius = 10;
var theta = 0;
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
	//pixelDensity(1);
 
}

function draw() {
	// for (var radius > 0; radius <= 10; radius++) {
  		for (var i = 0; i <= 360; i++){
  			x = mouseX + radius * cos(i);
  			y = mouseY + radius * sin(i);
 
  			console.log(x, y);
  			var c = color(mouseX*0.3, floor(random(0,255)), mouseY*0.5);
  			set(x,y,c);
  			updatePixels();
  		}	

}