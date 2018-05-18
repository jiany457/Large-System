var comments;
// var MusicSearcher;
// var result;
// var result2;
var doggos;
var dogImage;

function preload() { //preload guarantee all data load completely before its running
	// setup code = preload
  // put setup code here
  comments = loadJSON("https://jsonplaceholder.typicode.com/comments");

  doggos = loadJSON("https://dog.cao/api/breed/hound/afghan/image");
  dogImage = loadJSON("https://dog.cao/api/breed/hound/afghan/image");

   //comments = loadJSON("https://jsonplaceholder.typicode.com/comments");
   //var SearchVariable = "Justin";
   //MusicSearcher = loadJSON("http://www.songsterr.com/a/ra/songs.json?pattern="+SearchVariable);

 //   	var ArtistsName = ["Marley","Justin"];
	// //for(var i = 0; i < 2;i++)
	// {
	// //console.log(ArtistsName[i]);
	// result = loadJSON("http://www.songsterr.com/a/ra/songs.json?pattern="+ArtistsName[0]);
	// result2 = loadJSON("http://www.songsterr.com/a/ra/songs.json?pattern="+ArtistsName[1]);
	
	// }
}

function setup()
{
	dogImage = loadImage(doggos.message[0]);
	createCanvas(1000, 1000);

// 	console.log(result[0]["title"]);
// 	console.log(result2[0]["title"]);

}

function draw() {

	image(loadImage(doggos.message[0]),0,0)

	// By PROFESSOR

	for (var i=0; i<100; i++){
	// rect(comments[i].id*20,20+sin(millis()*0.01+i)*10,30,40);
	rect(comments[i].id*20+sin(millis()*0.01+i),20,30,40);
}
	//HOWMWORK
	//console.log(MusicSearcher[0].title);

	//var TitleName = MusicSearcher[0].title;
//}
  // put drawing code here
}