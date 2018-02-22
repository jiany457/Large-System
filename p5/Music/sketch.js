var MusicSearcher;
var result;
// var result2;

function preload() { //preload guarantee all data load completely before its running
	// setup code = preload
  // put setup code here
  // console.log(loadJSON("https://jsonplaceholder.typicode.com/comments"));

  
   //comments = loadJSON("https://jsonplaceholder.typicode.com/comments");
   //var SearchVariable = "Justin";
   //MusicSearcher = loadJSON("http://www.songsterr.com/a/ra/songs.json?pattern="+SearchVariable);

 //   	var ArtistsName = ["Marley","Justin"];
	// for(var i = 0; i < ArtistsName.length;i++)
	// {
	// //console.log(ArtistsName[i]);
	// result = loadJSON("http://www.songsterr.com/a/ra/songs.json?pattern="+ArtistsName[i]);
	// // result2 = loadJSON("http://www.songsterr.com/a/ra/songs.json?pattern="+ArtistsName[1]);
	
	// }
	result = loadJSON("http://www.songsterr.com/a/ra/songs.json?pattern=Justin");
	
	// }

}

function setup()
{
  createCanvas(1000, 1000, WEBGL);
}


function draw() {
 for (var i=0; i<100; i++){
  console.log(result[0].id);
   var r = random(50);
  stroke(r * 5,234,189);
  line(50, i, 50 + r, i);
  // background(result[0].(id*1/10000));
  rotateX(frameCount * result[0].id*(1/10000));
  rotateY(frameCount * result[0].id*(1/10000));
  box(300);
	//console.log(comments[0].email);
	//console.log(MusicSearcher[0].title);

	//var TitleName = MusicSearcher[0].title;
//}
  // put drawing code here
for (var y = 0; y < 100; y++) {
  var x = randomGaussian(result[0].id*(1/10000), result[0].id*(1/10000));
  line(50, y, x, y);
}

}
}