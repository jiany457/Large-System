var osc = require('node-osc');


var mX,mY;


function setup() {
  // put setup code here

createCanvas(windowWidth,windowHeight);
 
pixelDensity(1);
background(0,0,0);
Listener(); 
// client.on('/mouse', data, newDrawing ());
}

// whenever receive data create new drawing
// function newDrawing(data){ 
//   loadPixels();
//   for(var y = data.y-10; y< data.y+10; y++){
//     for(var x = data.x-10; x<data.x+10; x++){
//       var index = (x + y * width)* 4
//       pixels[index+0] = data.x*0.3;
//       pixels[index+1] = floor(random(0,255));
//       pixels[index+2] = data.y*0.3;
//       pixels[index+3] = 255; 

//     }
//   }
//   updatePixels();

 
//start drawing
function mouseMoved(){

  DrawPixels();


  mX = mouseX;
  mY = mouseY;

  SendData();
}

function DrawPixels()
{

      loadPixels();

  for(var y = mouseY-10; y< mouseY+10; y++){
    for(var x = mouseX-10; x<mouseX+10; x++){
      var index = (x + y * width)* 4
      pixels[index+0] = mouseX*0.3;
      pixels[index+1] = floor(random(0,255));
      pixels[index+2] = mouseY*0.3;
      pixels[index+3] = 255;

    }
  }
  updatePixels();
}

function SendData()
{
  console.log('Sending'+ mouseX + ',' + mouseY);
  var client = new osc.Client('127.0.0.1',4444);

// var data = {
//     x: mouseX,
//     y: mouseY
//   }



  client.send('/mouse', mX , mY);

}

// function DrawPixelsFromData(posX,posY)
// {

//       loadPixels();

//   for(var y = posY-10; y< posY+10; y++){
//     for(var x = posX-10; x<posX+10; x++){
//       var index = (x + y * width)* 4
//       pixels[index+0] = posX*0.3;
//       pixels[index+1] = floor(random(0,255));
//       pixels[index+2] = posY*0.3;
//       pixels[index+3] = 255;

//     }
//   }
//   updatePixels();
// }

function Listener()
{
  var osc = require('node-osc');

  var oscServer = new osc.Server(3333, '0.0.0.0');
  oscServer.on("message", function(msg, rinfo)
  {
    console.log(msg[0]);
    console.log(msg[1]);
    console.log(msg[2]);
    var GetmX,GetmY;

    GetmX = msg[1];
    GetmY = msg[2];

    DrawPixelsFromData(GetmX,GetmY);

  });
}


function draw() {
  // put drawing code here
// pixelization();
}

