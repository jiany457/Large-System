var  ang;
var  dist1, dist2;
var al;
var x, y, x2, y2;
var colr,count;

function setup() {
  createCanvas(1000, 1000);
  background(0);
 
 ang=0
  x = 0;
  y = 0;
  count = 0;
  x2 = 0;
  y2 = 0;
  createP("scale of curve"); // create <p> </p>
 dist1=createSlider(30,100,80);
    createP("scale of rect");
 dist2=createSlider(100,600,300);
    createP("alpha ");
 al=createSlider(0,255,30);
    createP("color R");
 colr=createSlider(0,255,30);
}


function draw() {
  blendMode(BLEND);
  fill(0, 0, 0, 20);
  rect(0, 0, width, height);

  push(); 
  //push() & pop () Note that these functions are always used together. 
  //They allow you to change the style and transformation settings and later return to what you had.
  
  translate(width / 2, height / 2); //to move position to the center of the canvas
  blendMode(ADD);
  strokeWeight(1);
  
  beginShape();
  for (j = 0; j < width / 60; j++) {
    stroke(colr.value(), j+100, 200+j, al.value()); //stoke(value1,value2,value3,[alpha])
    
    beginShape();
    for (i = 0; i < 365; i++) {
      ang = radians(i);
      x = sin(ang) * (j / 3 *dist1.value() + dist1.value() * noise(y / 20, count));
      y = cos(ang) * (j / 3 * 0 + dist1.value() * noise(x / 30, count));
      curveVertex(x, y);
      x2 = cos(ang) * (-20 +(dist2.value()-50) * noise(y2 / 20, count));
      y2 = sin(ang) * (-20 + dist2.value() * noise(x2 / 20, count));
      fill(0, j,255, al.value());
      rect(x2, y2, 2, 2);
      noFill();
    }
    count += 0.01;
    endShape();
  }

  pop();



}