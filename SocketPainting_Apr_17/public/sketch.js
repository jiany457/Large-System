// work as a client file
var socket;
var myColor;

function setup() {
  // put setup code here
socket = io(); // like the setTime function??
myColor = {r:random(255), g:random(255), b:random(255)};

// how do we tell client to deal with incoming brush msg?
//draw remot brush strokes
socket.on('brush', function(brushData){
	//we use brushData.x, brushData.y, brushData.color
	stroke(brushData.color.r,brushData.color.g,brushData.color.b)
	ellipse(brushData.x, brushData.y,brushData.px,brushData.py);
});
createCanvas(displayWidth, displayHeight);
strokeWeight(10);
stroke(0);


}

// function draw(){
// 	mouseDragged();
// }

function mouseDragged() {
  // put drawing code here
  //emit is sending and collecting data, and trigger the on to do something with it
  stroke(myColor.r, myColor.g, myColor.b);
  line (mouseX, mouseY, pmouseX, pmouseY);
  socket.emit('brush', {x:mouseX, 
  						y:mouseY, 
  						px:pmouseX, 
  						py: pmouseY,  //stands for previous mouse Y position
  						color:myColor});
  return false;

}